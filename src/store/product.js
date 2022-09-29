import { makeAutoObservable, runInAction } from "mobx";

class Product {
    data = {
        title: "",
    };
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getOne(id) {
        runInAction(() => {
            this.isLoading = true;
        });
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            this.data = await res.json();
        } catch (e) {
            console.log(e);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}

export default new Product();
