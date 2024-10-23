using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiJWT.Custom;
using WebApiJWT.Models;
using WebApiJWT.Models.DTOs;

namespace WebApiJWT.Controllers
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    [ApiController]
    public class AccesoController : ControllerBase
    {
        private readonly DbpruebaContext _context;
        private readonly Utilidades _utilidades;
        public AccesoController(DbpruebaContext context, Utilidades utilidades)
        {
            _context = context;
            _utilidades = utilidades;
        }

        [HttpPost]
        [Route("Registrarse")]
        public async Task<IActionResult> Registrarse(UsuarioDTO objeto)
        {
            var modeloUsuario = new Usuario
            {
                Nombre = objeto.Nombre,
                Correo = objeto.Correo,
                Clave = _utilidades.encriptarSHA256(objeto.Clave)
            };
            await _context.Usuarios.AddAsync(modeloUsuario);
            await _context.SaveChangesAsync();

            if (modeloUsuario.IdUsuario != 0)
                return StatusCode(StatusCodes.Status200OK, new { isSuccess = true });
            else
                return StatusCode(StatusCodes.Status200OK, new { isSuccess = false });
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(LoginDTO objeto)
        {
            var usuarioEncontrado = await _context.Usuarios.Where(u => u.Correo == objeto.Correo && u.Clave == _utilidades.encriptarSHA256(objeto.Clave)).FirstOrDefaultAsync();

            if(usuarioEncontrado == null)
                return StatusCode(StatusCodes.Status401Unauthorized, new {isSucces = false, token = "" });
            else
                return StatusCode(StatusCodes.Status200OK, new { isSucces = true, token = _utilidades.generarJWT(usuarioEncontrado)});
            
        }
    }
}
