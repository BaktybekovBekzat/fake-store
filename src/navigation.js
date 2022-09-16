import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProductScreen } from "./screens";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case "Home":
                            iconName = "home";
                            break;
                        case "Product":
                            iconName = "cart";
                            break;
                        default:
                            break;
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: "#f58735",
                tabBarInactiveTintColor: "#000",
            })}
            sceneContainerStyle={{ backgroundColor: "#fff" }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerTitle: "Fake Store" }}
            />
            <Tab.Screen
                name="Product"
                component={ProductScreen}
                options={{ headerTitle: "Корзина" }}
            />
        </Tab.Navigator>
    );
};

export default Navigation;
