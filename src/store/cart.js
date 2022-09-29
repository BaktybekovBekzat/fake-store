import { makeAutoObservable, runInAction } from "mobx";

class Cart {
    isLoading = false;
    data = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getCart() {
        runInAction(() => {
            this.isLoading = true;
        });
        try {
            const res = await fetch(`https://dummyjson.com/carts/user/${100}`);

            runInAction(() => {
                this.data = this.data;
            });
        } catch (error) {
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    async addToCart(product) {
        try {
            const res = await fetch("https://dummyjson.com/carts/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: 100,
                    products: [
                        {
                            id: product.id,
                        },
                    ],
                }),
            });

            runInAction(() => {
                this.data = [...this.data, product];
            });
        } catch (error) {
            console.log(error);
        }
    }

    async removeFromCart(id) {
        runInAction(() => {
            this.data = [...this.data.filter((product) => product.id !== id)];
        });
    }
}

export default new Cart();
