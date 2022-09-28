import { makeAutoObservable } from "mobx";

class Wishlist {
    products = [];

    constructor() {
        makeAutoObservable(this);
    }

    getAll() {
        return this.products;
    }

    addProduct(product) {
        this.products = [...this.products, product];
    }

    removeProduct(id) {
        this.products = [
            ...this.products.filter((product) => product.id !== id),
        ];
    }
}

export default new Wishlist();
