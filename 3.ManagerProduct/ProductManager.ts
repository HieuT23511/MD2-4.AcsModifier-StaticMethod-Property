import {Product} from "./Product";
// Ham chuyen doi tien te sang dang number.
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

export class ProductManager{
    private _product: Product[] = [];
    constructor() {
    };
    getAll(){
        console.log(`List of Product:`);
       this._product.forEach (elt=>{
           console.log(`-This price of product ${elt.getName()} is ${formatter.format(elt.getPrice())}`)
       })
    }
    addProduct(product:Product){
        this._product.push(product);
    }
}