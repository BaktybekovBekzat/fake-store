import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    HomeScreen,
    ProductScreen,
    CartScreen,
    LoginScreen,
    WishlistScreen,
} from "./screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import cart from "./store/cart";
import wishlist from "./store/wishlist";
import { observer } from "mobx-react";

const Tab = createBottomTabNavigator();

const Navigation = observer(() => {
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const isLoggedIn = JSON.parse(
                await AsyncStorage.getItem("isLoggedIn")
            );

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
                        case "Wishlist":
                            iconName = "heart";
                            break;
                        default:
                            break;
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: "#f58735",
                tabBarInactiveTintColor: "#726d6d",
            })}
            sceneContainerStyle={{ backgroundColor: "#fff" }}
            initialRouteName="Login"
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerTitle: "Fake Store", tabBarLabel: "Главная" }}
            />
            <Tab.Screen
                name="Product"
                component={ProductScreen}
                options={{
                    headerTitle: "Страница товара",
                    tabBarButton: (props) => null,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerTitle: "Корзина",
                    tabBarLabel: "Корзина",
                    tabBarBadge:
                        cart.data.length > 0 ? cart.data.length : undefined,
                    tabBarBadgeStyle: {
                        backgroundColor: "#f58735",
                        color: "#fff",
                    },
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={WishlistScreen}
                options={{
                    headerTitle: "Избранное",
                    tabBarLabel: "Избранное",
                    tabBarBadge:
                        wishlist.products.length > 0
                            ? wishlist.products.length
                            : undefined,
                    tabBarBadgeStyle: {
                        backgroundColor: "#f58735",
                        color: "#fff",
                    },
                }}
            />
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
});

export default Navigation;
