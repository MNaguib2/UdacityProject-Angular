import { Product } from "../content/product";

export class Cart{
    constructor(
        public id : number,
        public IdProduct: number,
        public Quantaty: number,
        public TotallPrice: number
    ){} 

}
export class margCartClass implements Cart{
    constructor(
        public id : number,
        public IdProduct: number,
        public Quantaty: number,
        public TotallPrice: number,
        public ProductDetials : Product
    ){}
}