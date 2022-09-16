import { observer } from "mobx-react";
import React, { useMemo } from "react";
import {
    SafeAreaView,
    Text,
    ActivityIndicator,
    View,
    Image,
    Button,
    Alert,
} from "react-native";
import product from "../../store/product";
import styled from "styled-components/native";

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

    useMemo(() => {
        if (_id) {
            product.getOne(_id);
        }
    }, [_id]);

    const addToCart = () => {
        Alert.alert("Товар добавен в корзину");
    };

    return (
        <SafeAreaView>
            {product.isLoading ? (
                <ActivityIndicator />
            ) : (
                <View>
                    <Image
                        source={{ uri: product.data.image, height: 240 }}
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
                            title="Добавить в корзину"
                            color="#000"
                            onPress={addToCart}
                        />
                        <StyledPrice>${product.data.price}</StyledPrice>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
});

export default ProductScreen;
