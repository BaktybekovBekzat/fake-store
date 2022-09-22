import { makeAutoObservable } from "mobx";

class User {
    isLoggedIn = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async login(data) {
        this.isLoading = true;
        try {
            await new Promise((res, rej) => {
                setTimeout(() => {
                    res();
                }, [2000]);
            });

            return (this.isLoggedIn = true);
        } catch (e) {
            this.isLoggedIn = false;
        } finally {
            this.isLoading = false;
        }
    }
}

export default new User();
