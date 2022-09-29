import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const StyledItem = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px;
    border-style: solid;
    border-color: "#ccc";
    padding: 7px 15px;
    margin-bottom: 15px;
`;

const StyledTitle = styled.Text`
    font-size: 29px;
    max-width: 150px;
`;

const StyledPrice = styled.Text`
    font-size: 22px;
    color: #85bb65;
    font-weight: bold;
    text-align: right;
`;

const StyledImage = styled.Image`
    width: 80px;
    min-height: 100px;
`;

const CartItem = ({ product }) => {
    return (
        <StyledItem>
            <StyledImage
                source={{ uri: product.thumbnail, width: 80, minHeight: 100 }}
            />
            <View>
                <StyledTitle>{product.title}</StyledTitle>
                <StyledPrice>$ {product.price}</StyledPrice>
            </View>
        </StyledItem>
    );
};

export default CartItem;
