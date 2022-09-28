import { makeAutoObservable } from "mobx";

class Products {
    products = [];
    totalItems = 0;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getAll(page = 1) {
        this.isLoading = true;
        try {
            const res = await fetch(
                `https://dummyjson.com/products?skip=${(page - 1) * 30}`
            );
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
