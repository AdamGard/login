using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiJWT.Models;

namespace WebApiJWT.Controllers
{
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)] //Para este programa solo tenemos un esquema de autenticación
    [ApiController]                                                             //Por lo que no es necesario especificar el esquema y podríamos dejar solo [Authorize]
    public class ProductoController : ControllerBase                           //Pero por cuestion de aprendizaje se deja especificado
    {
        private readonly DbpruebaContext _context;
        public ProductoController(DbpruebaContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            var lista = await _context.Productos.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, new {value = lista});
        }
    }
}
