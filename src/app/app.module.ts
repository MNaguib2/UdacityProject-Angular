import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ContentModule } from './content/content.module';
import { coreModule } from './core.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [ 
    coreModule,   
    ContentModule,
    CartModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
