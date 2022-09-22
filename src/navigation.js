import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProductScreen, CartScreen, LoginScreen } from "./screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

            if (isLoggedIn) {
                navigation.navigate("Home");
            } else {
                navigation.navigate("Login");
            }
        })();
    }, []);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case "Home":
                            iconName = "home";
                            break;
                        case "Cart":
                            iconName = "cart";
                            break;
                        default:
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#f58735",
                tabBarInactiveTintColor: "#000",
            })}
            sceneContainerStyle={{ backgroundColor: "#fff" }}
            initialRouteName="Login">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerTitle: "Fake Store" }}
            />
            <Tab.Screen
                name="Product"
                component={ProductScreen}
                options={{
                    headerTitle: "Страница товара",
                    tabBarButton: (props) => null,
                }}
            />
            <Tab.Screen name="Cart" component={CartScreen} options={{ headerTitle: "Корзина" }} />
            <Tab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerTitle: "Войти в аккаунт",
                    tabBarButton: (props) => null,
                }}
            />
        </Tab.Navigator>
    );
};

export default Navigation;
