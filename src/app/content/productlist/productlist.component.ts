import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, throwIfEmpty } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import * as $ from 'jquery';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})


export class ProductlistComponent implements OnInit, OnDestroy {
  subscribe !: Subscription;
  constructor(public productConnection: ProductService,
    public CartConnection: CartService) {

    this, this.subscribe = this.productConnection.getProducts().subscribe(data => {
      this.Product = data;
    })
  }
  Product: Product[] = [{ id: 0, ImageURL: "", Price: 0, Quantity: 0, Title: "", Discriptions: "" }];
  
  ngOnInit(): void { }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  counter(i: number) {
    let newArray: Array<number> = [];
    let index: number = 0;
    while (index < i) {
      index++;
      newArray.push(index);
    }
    return newArray;
  }
}
