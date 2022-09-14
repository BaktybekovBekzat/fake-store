import { makeAutoObservable } from "mobx";

class Product {
    products = [];
    totalItems = 0;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getAll(page = 1, limit = 30) {
        this.isLoading = true;
        try {
            const res = await fetch(`https://fakestoreapi.com/products?${page}&limit=${limit}`);
            this.products = await res.json();
        } catch (e) {
            console.log(e);
        } finally {
            this.isLoading = false;
        }
    }
}

export default new Product();
