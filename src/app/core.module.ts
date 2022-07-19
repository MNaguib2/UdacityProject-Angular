import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
    ],
    exports:[
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule
    ]
})
export class coreModule { }