"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this._product = [];
    }
    ;
    ProductManager.prototype.getAll = function () {
        var formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        this._product.forEach(function (elt) {
            console.log("This price of product ".concat(elt.getName(), " is ").concat(formatter.format(elt.getPrice())));
        });
    };
    ProductManager.prototype.addProduct = function (product) {
        this._product.push(product);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
