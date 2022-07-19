import { NgModule } from '@angular/core';
import { CartDetialsComponent } from './cart-detials/cart-detials.component';
import { CartService } from './cart.service';
import { coreModule } from '../core.module';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    CartDetialsComponent,
    ConfirmComponent
  ],
  imports: [
    coreModule
  ],
  providers: [CartService], 
})
export class CartModule { }
