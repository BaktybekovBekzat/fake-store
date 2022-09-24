import { makeAutoObservable } from "mobx";

class Products {
    products = [];
    totalItems = 0;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getAll() {
        this.isLoading = true;
        try {
            const res = await fetch(`https://dummyjson.com/products`);
            const json = await res.json();
            this.products = json.products;
        } catch (e) {
            console.log(e);
        } finally {
            this.isLoading = false;
        }
    }
}

export default new Products();
