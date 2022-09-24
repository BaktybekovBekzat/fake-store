import { makeAutoObservable } from "mobx";

class Cart {
    isLoading = false;
    data = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getCart() {
        this.isLoading = true;
        try {
            const res = await fetch(`https://dummyjson.com/carts/user/${100}`);

            this.data = this.data;
        } catch (error) {
        } finally {
            this.isLoading = false;
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

            this.data = [...this.data, product];
        } catch (error) {
            console.log(error);
        }
    }

    async removeFromCart(id) {}
}

export default new Cart();
