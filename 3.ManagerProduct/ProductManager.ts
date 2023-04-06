import {Product} from "./Product";

export class ProductManager{
    private _product = [];
    constructor() {
    };
    getAll(){
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
       this._product.forEach (elt=>{
           console.log(`This price of product ${elt.getName()} is ${formatter.format(elt.getPrice())}`)
       })
    }
    addProduct(product:Product){
        this._product.push(product);
    }
}