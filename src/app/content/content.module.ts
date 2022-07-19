import { NgModule } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { ProductService } from './product.service';
import { coreModule } from '../core.module';
import { CartService } from '../cart/cart.service';





@NgModule({
  declarations: [
    ProductlistComponent,
    ProductDetialsComponent
  ],
  imports:[
    coreModule
  ],
  providers:[
    ProductService,
    CartService
  ]
})
export class ContentModule { }
