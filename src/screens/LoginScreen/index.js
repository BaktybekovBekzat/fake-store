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
`;

const LoginScreen = observer(({ navigation }) => {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const login = async () => {
        if (!form.password || !form.username)
            return Alert.alert("Заполните все поля", "Введите свой username и пароль");

        const res = await user.login(form);

        if (res) {
            AsyncStorage.setItem("isLoggedIn", res);
            navigation.navigate("Home");
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View>
                <StyledTextInput
                    placeholder="Username"
                    textContentType="username"
                    value={form.username}
                    onChangeText={(value) => setForm({ ...form, username: value })}
                />
                <StyledTextInput
                    placeholder="Password"
                    textContentType="password"
                    value={form.password}
                    secureTextEntry={true}
                    onChangeText={(value) => setForm({ ...form, password: value })}
                />
                <Button title="Войти" onPress={login} />
            </View>
        </SafeAreaView>
    );
});

export default LoginScreen;
