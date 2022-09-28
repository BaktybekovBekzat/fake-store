import { observer } from "mobx-react";
import React, { useEffect, useMemo, useState } from "react";
import {
    SafeAreaView,
    ActivityIndicator,
    View,
    Image,
    Button,
    Alert,
} from "react-native";
import product from "../../store/product";
import styled from "styled-components/native";
import cart from "../../store/cart";

const StyledTitle = styled.Text`
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: 500;
`;

const StyledPrice = styled.Text`
    font-size: 22px;
    color: #85bb65;
    font-weight: 700;
    line-height: 19px;
    text-align: right;
    margin-top: 10px;
`;

const StyledDesc = styled.Text`
    font-size: 16px;
    color: #000;
    font-weight: 400;
    margin-bottom: 5px;
`;

const StyledCategory = styled.Text`
    display: inline;
    text-align: center;
    padding: 2px 4px;
    background-color: #fff;
    border: 1px solid #ccc;
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 10px;
`;

const ProductScreen = observer(({ navigation, route }) => {
    const { _id } = route.params;
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        if (_id) {
            product.getOne(_id);
        }
    }, [_id]);

    useMemo(() => {
        setIsInCart(cart.data.some((item) => item.id === product.data.id));
    }, [cart.data]);

    const addToCart = (product) => {
        if (!product) return;

        cart.addToCart(product).then(() => {
            Alert.alert("Успешно", "Товар добавлен в корзину");
        });
    };

    const removeFromCart = (id) => {
        if (!id) return;

        cart.removeFromCart(id).then(() => {
            Alert.alert("Успешно", "Товар удален из корзины");
        });
    };

    return (
        <SafeAreaView>
            {product.isLoading ? (
                <ActivityIndicator />
            ) : (
                <View>
                    <Image
                        source={{ uri: product.data.thumbnail, height: 240 }}
                        resizeMode="contain"
                        style={{
                            borderBottomColor: "#ccc",
                            borderBottomWidth: 1,
                        }}
                    />
                    <View style={{ padding: 15 }}>
                        <StyledTitle>{product.data.title}</StyledTitle>
                        <StyledDesc>{product.data.description}</StyledDesc>
                        <StyledCategory>{product.data.category}</StyledCategory>
                        <Button
                            title={
                                !isInCart ? "Добавить в корзину" : "В корзине"
                            }
                            color={!isInCart ? "#000" : "#ccc"}
                            onPress={() =>
                                !isInCart
                                    ? addToCart(product.data)
                                    : removeFromCart(product.data.id)
                            }
                        />
                        <StyledPrice>${product.data.price}</StyledPrice>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
});

export default ProductScreen;
