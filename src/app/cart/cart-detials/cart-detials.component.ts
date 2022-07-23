import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { mergeMap, of, exhaustMap, map, tap, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/content/product.service';
import { Cart, margCartClass } from '../cart';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-detials',
  templateUrl: './cart-detials.component.html',
  styleUrls: ['./cart-detials.component.scss']
})
export class CartDetialsComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static:true}) Confirm !: NgForm;
  @ViewChild('buttonSubmit') buttonSubmit !: ElementRef;
  FullName !: string;
  Address !: string;
  Credit !: number;
  modelTitle !: string;
  id !:margCartClass;
  ConfirmDelete !: string;
  confirmPage : boolean = true;

  buttonClass : string = "btn-secondary";
  Message : string = 'Are You Sure Confirm Purchase';

  constructor(private CartService: CartService, private ProductConnection: ProductService, 
                  private router: Router, private route : ActivatedRoute,) {}
  totalPrice: number = 0;

  // carts: Cart[] = [{ id: 0, IdProduct: 0, Quantaty: 0, TotallPrice: 0 }];
  marge: margCartClass[] = [{
    id: 0, IdProduct: 0,
    ProductDetials: { Discriptions: '', id: 0, ImageURL: '', Price: 0, Quantity: 0, Title: '' }, Quantaty: 0, TotallPrice: 0
  }]

  // Product: Product = { id: 0, ImageURL: "", Price: 0, Quantity: 0, Title: "", Discriptions: "" };
  subscribe !: Subscription;


  ngOnInit(): void {


    this.subscribe = this.CartService.getAllCart().pipe(
      tap(value => {
        return value.map(cart => {
          this.totalPrice = this.totalPrice + cart.TotallPrice;
          this.ProductConnection.getProduct(cart.IdProduct).subscribe(product => {
            this.marge.push({id: cart.id, IdProduct: cart.IdProduct, ProductDetials : product, Quantaty: cart.Quantaty , TotallPrice: cart.TotallPrice});
          })
        })
      })
    )
    .subscribe(data => {
      this.marge.splice(0,1);
      //console.log(this.marge);
    });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  changeNumber(idcart: margCartClass, event: Event){
    //console.log((event.srcElement as HTMLInputElement).value);
    const index: number = this.marge.findIndex(value => value.id === idcart.id);
    this.marge[index].Quantaty = +(event.srcElement as HTMLInputElement).value;
    const newTotalPrice = +(event.srcElement as HTMLInputElement).value * this.marge[index].ProductDetials.Price;
    const differentPrice = newTotalPrice - this.marge[index].TotallPrice;
    this.marge[index].TotallPrice = newTotalPrice;
    this.totalPrice = this.totalPrice + differentPrice;
  }
  onSubmit(){
    if(this.marge.length > 0){
      // console.log(this.marge.length);
      // console.log(this.Confirm);
      let ids = this.marge.map(element => element.id);
      this.CartService.clearCart(ids);
      this.confirmPage = false;
      //this.router.navigate(['/confirmPurchase'], {relativeTo: this.route , queryParams: {FullName: this.Confirm.value.FullName, totalPrice : this.totalPrice}});
    }else{

    }    
  }

  changeButton(){
    if(this.marge.length > 0){
      this.buttonClass = "btn-secondary";
      this.Message ='Are You Sure Confirm Purchase'
      this.modelTitle = '';
    }else{
      (this.buttonSubmit.nativeElement as HTMLButtonElement).hidden = true;
      this.buttonClass = "btn-danger";
      this.Message ='Sorry Please Add Product To Cart'
      this.modelTitle = 'text-danger';
    }
  }
  RemoveFromCart(id: margCartClass): void{
    this.CartService.reomveFromCartService(id.id).subscribe(data => {
      //console.log(data);
    })
    this.ConfirmDelete = '';
    this.totalPrice = this.totalPrice - id.TotallPrice;
    this.marge.splice(this.marge.findIndex(element => element.id === id.id), 1);
  }
  MessageFromCart(data : margCartClass){
    this.ConfirmDelete = `Are You sure Want Delete ${data.ProductDetials.Title}`
    this.id = data;
  }
  changeTest(event : Event){
    console.log(event);
  }
  BackToMainPage(){
    this.router.navigate(['/ProductList']);
  }
}
