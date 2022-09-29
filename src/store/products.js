import { makeAutoObservable, runInAction } from "mobx";

class Products {
    products = [];
    totalItems = 0;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getAll(page = 1) {
        runInAction(() => {
            this.isLoading = true;
        });
        try {
            const res = await fetch(
                `https://dummyjson.com/products?skip=${(page - 1) * 30}`
            );
            const json = await res.json();
            runInAction(() => {
                this.products = json.products;
            });
        } catch (e) {
            console.log(e);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}

export default new Products();
