import AsyncStorage from "@react-native-async-storage/async-storage";
import { observer } from "mobx-react";
import { useState } from "react";
import { SafeAreaView, View, Button, Alert } from "react-native";
import styled from "styled-components/native";
import user from "../../store/user";

const StyledTextInput = styled.TextInput`
    padding: 7px 15px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-bottom: 15px;
    width: 150px;
`;

const LoginScreen = observer(({ navigation }) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        age: "",
        password: "",
    });

    const login = async () => {
        if (!form.password || !form.firstName || !form.lastName || !form.age)
            return Alert.alert(
                "Заполните все поля",
                "Введите свой username и пароль"
            );

        const isLoggedIn = await user.login(form);

        if (isLoggedIn) {
            AsyncStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
            navigation.navigate("Home");
        } else {
            AsyncStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
        }
    };

    return (
        <SafeAreaView
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <View>
                <StyledTextInput
                    placeholder="Firstname"
                    textContentType="firstName"
                    value={form.firstName}
                    onChangeText={(value) =>
                        setForm({ ...form, firstName: value })
                    }
                />
                <StyledTextInput
                    placeholder="LastName"
                    textContentType="lastName"
                    value={form.lastName}
                    onChangeText={(value) =>
                        setForm({ ...form, lastName: value })
                    }
                />
                <StyledTextInput
                    placeholder="Age"
                    textContentType="number"
                    value={form.age}
                    onChangeText={(value) => setForm({ ...form, age: value })}
                />
                <StyledTextInput
                    placeholder="Password"
                    textContentType="password"
                    value={form.password}
                    secureTextEntry={true}
                    onChangeText={(value) =>
                        setForm({ ...form, password: value })
                    }
                />
                <Button title="Войти" onPress={login} />
            </View>
        </SafeAreaView>
    );
});

export default LoginScreen;
