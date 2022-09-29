import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import wishlist from "../../store/wishlist";

const width = Dimensions.get("window").width - 40;

const StyledProductItem = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 240px;
    border-radius: 8px;
    background-color: #fff;
    elevation: 1;
    margin: 5px;
`;

const StyledTitle = styled.Text`
    font-size: 12px;
    color: #000;
    font-weight: medium;
    line-height: 15px;
    height: 30px;
    overflow-y: hidden;
`;

const StyledPrice = styled.Text`
    font-size: 20px;
    font-weight: bold;
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

const ProductItem = observer(({ data }) => {
    const [isInWishlist, setisInWishlist] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        setisInWishlist(
            wishlist.products.some((product) => product.id === data.id)
        );
    }, [wishlist.products]);

    return (
        <StyledProductItem
            style={{
                maxWidth: width / 2,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowRadius: 12,
            }}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate("Product", { _id: data.id })}
            >
                <StyledImage
                    source={{ uri: data.thumbnail }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <View
                style={{
                    paddingBottom: 10,
                    paddingLeft: 12,
                    paddingRight: 12,
                }}
            >
                <StyledTitle>{data.title}</StyledTitle>
                <StyledPrice>${data.price}</StyledPrice>
            </View>
            <TouchableOpacity
                onPress={() => {
                    if (!isInWishlist) {
                        setisInWishlist(true);
                        wishlist.addProduct(data);
                    } else {
                        setisInWishlist(false);
                        wishlist.removeProduct(data.id);
                    }
                }}
            >
                <StyledHeartIcon
                    source={
                        !isInWishlist
                            ? require("../../assets/images/heart.png")
                            : require("../../assets/images/heart-active.png")
                    }
                />
            </TouchableOpacity>
        </StyledProductItem>
    );
});

export default ProductItem;
