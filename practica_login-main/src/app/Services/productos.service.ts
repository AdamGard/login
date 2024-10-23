import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar el módulo HttpClient
import { Observable } from 'rxjs'; // Importar el módulo Observable
import { Productos } from '../Interfaces/productos'; // Importar la interfaz Producto
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = environment.apiUrl + '/productos'; // URL de la API0
  constructor(private http: HttpClient) {}

  getProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.apiUrl); // Obtener los productos
  }
}
