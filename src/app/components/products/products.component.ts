import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [
    {
        id: '1',
        name: 'Product 1',
        image: './assets/images/toy.jpg',
        price: 100
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
  ];

  onAddToShoppingCart(product: Product){
    this.myShoppingCart.push(product)
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}
