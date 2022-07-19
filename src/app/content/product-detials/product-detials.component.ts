import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.scss']
})
export class ProductDetialsComponent implements OnInit, OnDestroy {
  subscribe !: Subscription;
  product : Product = {id: 0, ImageURL: "" , Price:0 , Quantity: 0, Title:"", Discriptions: ""};
  constructor(public productConnection : ProductService, private activatedrouter: ActivatedRoute, public CartConnection : CartService) { 
   this.subscribe = this.productConnection.getProduct(this.activatedrouter.snapshot.params['id']).subscribe((data: Product) => {
      this.product = data;
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  counter(i: number) {
    let newArray : Array<number> = [];
    let index : number = 0;
    while (index < i) {
      index++;
      newArray.push(index);
    }
    return newArray;
}

}
