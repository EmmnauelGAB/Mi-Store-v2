import { ProdcutsService } from './../../services/prodcuts.service';
import { StoreService } from './../../services/store.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1, 22)

  constructor(
    private storeService: StoreService,
    private prodcutsService: ProdcutsService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.prodcutsService.getAllProducts()
    .subscribe(data => {
      this.products = data
    });
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}

