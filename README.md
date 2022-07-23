# TShertShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

# to Run App
must configuration node js and npm then Install angular
2- run in cmd `npm i`
3- run in cmd `npm i json-server` to configuration environment database
after this follow steps Development Server

# Dependancy
BootStrap :- `npm i bootstrap@4.0.0` 
popper.js : - `npm i popper.js@1.12.9`
JQuery : -`npm i jquery@3.2.1`  , `npm i @types/jquery@3.2.1 -D` To work with TypeScript

# structure App
this app content of four module 

first app.module this is main module that collection all module in this 

second  core.module this content of all package use in all module this content of aggregate to all package share

third name content.module this is responsible about two component ProductList and Product details additional to one service Product to can get data from or to database and all relationship related to product between database 
too in this module content of product.model to define object about all properties product

fourth name cart.module tjis content of component cart detials to show all product you add to cart and fields to made confirm process purchase and confirm component to show all invoice additional to cart.service to can get data from or to database and all relationship related to cart between database 
too in this module cart of cart.model to define object about all properties cart


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `json-server --watch src\assets\db.json` for a dev server. Navigate to `http://localhost:3000/`. the database will automatically run in file json under name db.json

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
