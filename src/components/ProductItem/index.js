import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const StyledProductItem = styled.View`
    display: flex;
    flex-direction: column;
    max-width: 160px;
    width: 100%;
    height: 240px;
    border-radius: 8px;
    background-color: #fff;
`;

const StyledTitle = styled.Text`
    font-size: 12px;
    color: #000;
    font-weight: 500;
    line-height: 15px;
    height: 30px;
    overflow-y: hidden;
`;

const StyledPrice = styled.Text`
    font-size: 20px;
    font-weight: 700;
    margin-top: 5px;
`;

const StyledImage = styled.Image`
    height: 148px;
    margin: 3px 3px 15px 3px;
`;

const StyledHeartIcon = styled.Image`
    position: absolute;
    bottom: 13px;
    right: 12px;
    width: 24px;
    height: 24px;
`;

export default function ProductItem({ data }) {
    return (
        <StyledProductItem
            style={{
                shadowColor: "#000",
                shadowOffest: { width: 0, height: 0 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
            }}
        >
            <StyledImage source={{ uri: data.image }} resizeMode="contain" />
            <View
                style={{ paddingBottom: 10, paddingLeft: 12, paddingRight: 12 }}
            >
                <TouchableOpacity>
                    <StyledTitle>{data.title}</StyledTitle>
                </TouchableOpacity>
                <StyledPrice>${data.price}</StyledPrice>
            </View>
            <StyledHeartIcon
                source={{ uri: require("../../assets/images/heart.png") }}
            />
        </StyledProductItem>
    );
}
