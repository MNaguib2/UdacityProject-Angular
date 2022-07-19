import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetialsComponent } from './cart/cart-detials/cart-detials.component';
import { ConfirmComponent } from './cart/confirm/confirm.component';
import { ProductDetialsComponent } from './content/product-detials/product-detials.component';
import { ProductlistComponent } from './content/productlist/productlist.component';

const routes: Routes = [
  {path: 'ProductList',  component: ProductlistComponent},
  {path: 'ProductDetials/:id',  component: ProductDetialsComponent},
  {path: 'confirmPurchase',  component: ConfirmComponent},
  {path: 'Cart',  component: CartDetialsComponent},
  {path: '', redirectTo:'ProductList', pathMatch: 'full' },
  {path: '**', redirectTo:'ProductList' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
