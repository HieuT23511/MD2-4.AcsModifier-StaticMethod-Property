import {Product} from "./Product";
import {ProductManager} from "./ProductManager";

let laptop = new Product('HP', 12000000);
let nokia = new Product('Brick',200000);
let productManager = new ProductManager();
productManager.addProduct(laptop);
productManager.addProduct(nokia);
productManager.getAll();