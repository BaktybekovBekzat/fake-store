import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

const ProductScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Text onPress={() => navigation.navigate("Home")}>ProductScreen page</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ProductScreen;
