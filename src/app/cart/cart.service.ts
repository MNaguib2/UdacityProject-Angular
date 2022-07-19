import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cart }  from './cart';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable()
export class CartService {
    Carts: Cart[] = [{ id: 0, IdProduct: 0, Quantaty: 0, TotallPrice: 0}];

    constructor(private http : HttpClient){}

    getAllCart(): Observable<Cart[]>{
       return this.http.get<Cart[]>(`${environment.apiHost}cart`);
    }


    AddToCart(idProduct: number, price: number) {
        this.http.get<Cart[]>(`${environment.apiHost}cart`).subscribe((data: Cart[]) => {
           if (data) this.Carts = data;
           const QuantitySelected: HTMLSelectElement = $(`#QuantatyNumber-${idProduct}`)[0] as unknown as HTMLSelectElement
           if (QuantitySelected.value === "") {
             console.log("Please Select Valid Quantity");
           } else {
     
             if (this.Carts.find(element => element.IdProduct == idProduct) != undefined) {
                this.updateCart(this.Carts.find(element => element.IdProduct == idProduct) as Cart , +QuantitySelected.value, price);
             } else {
               let maxid = 0;
               this.Carts.forEach(element => {
                 if (maxid < element.id) {
                   maxid = element.id;
                 }
               })
               const TotallPrice = price * +QuantitySelected.value;
               this.http.post(`${environment.apiHost}cart`, 
               { id: maxid + 1, IdProduct: idProduct, Quantaty: +QuantitySelected.value, TotallPrice: TotallPrice,}).subscribe();
             }
           }
         })
     }
     
       updateCart(cart: Cart, quantity: number, price: number)  {
         //console.log(cart);
         const newPrice = price * quantity;
         const newQuantity = cart.Quantaty + quantity;
         const TotallPrice = cart.TotallPrice + newPrice;
         this.http.put(`${environment.apiHost}cart/${cart.id}`,
         {TotallPrice: TotallPrice, Quantaty : newQuantity, IdProduct : cart.IdProduct}).subscribe();
         // console.log("update");
       }
       clearCart(id : number[]){
        for (let index = 0; index < id.length; index++) {
          this.http.delete(`${environment.apiHost}cart/${id[index]}`).subscribe();
          
        }        
       }
}