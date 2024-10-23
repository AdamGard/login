import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Services/productos.service';
import { Productos } from 'src/app/Interfaces/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos: Productos[] = [];
  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe(
      (data: Productos[]) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }
}
