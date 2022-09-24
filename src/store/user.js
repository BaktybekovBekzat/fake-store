import AsyncStorage from "@react-native-async-storage/async-storage";
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
            const res = await fetch("https://dummyjson.com/users/add", {
                method: "POST",
                body: JSON.stringify({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    age: data.age,
                    password: data.password,
                }),
                headers: {
                    "Content-type": "application/json",
                },
            });
            this.isLoggedIn = true;

            return (await res.json()) ? true : false;
        } catch (e) {
            this.isLoggedIn = false;
        } finally {
            this.isLoading = false;
        }
    }
}

export default new User();
