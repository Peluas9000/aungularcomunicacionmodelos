import { Component } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-lista-productos-component',
  standalone: false,
  styleUrl: './lista-productos-component.css',
  templateUrl: './lista-productos-component.html',
})
export class ListaProductosComponent {
  public producto:Product;
  public listaproductos:Array<Product>;
  constructor(){
    this.producto=new Product("Reloj","https://static.tous.com/photoweb/pub/3000137800/0/G/fullres.jpg?w=1000", 20);
    this.listaproductos=new Array<Product>();
    this.listaproductos = [
      new Product(
        "Nike Air Jordan",
        "https://images.zapantojos.com/media/2022/07/39253d37.jpg",
        150
      ),
      new Product(
        "Nike Air Mag",
        "https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg",
        1900
      ),	  
      new Product(
        "New Balance 998",
        "https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg",
        140
      ),
      new Product(
        "https://jhayber.com/documents/images/products/63638-850-1.jpg",
        "J-Hayber Olimpo",
        60
      ),
      new Product(
        "Cangrejeras",
        "https://tonipons.com/cdn/shop/files/CALA_CRISTAL__0.webp",
        10
      )
    ]
    
  } 



}


