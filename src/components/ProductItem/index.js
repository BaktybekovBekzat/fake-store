import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import wishlist from "../../store/wishlist";

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

const ProductItem = observer(({ data }) => {
    const navigation = useNavigation();
    const [isInWishlist, setisInWishlist] = useState(false);

    useMemo(() => {
        setisInWishlist(
            wishlist.products.some((product) => product.id === data.id)
        );
    }, [wishlist.products]);

    return (
        <StyledProductItem
            style={{
                shadowColor: "#000",
                shadowOffest: { width: 0, height: 0 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
            }}
        >
            <StyledImage
                source={{ uri: data.thumbnail }}
                resizeMode="contain"
            />
            <View
                style={{ paddingBottom: 10, paddingLeft: 12, paddingRight: 12 }}
            >
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Product", { _id: data.id })
                    }
                >
                    <StyledTitle>{data.title}</StyledTitle>
                </TouchableOpacity>
                <StyledPrice>${data.price}</StyledPrice>
            </View>
            <TouchableOpacity
                onPress={() =>
                    !isInWishlist
                        ? wishlist.addProduct(data)
                        : wishlist.removeProduct(data.id)
                }
            >
                <StyledHeartIcon
                    source={{
                        uri: !isInWishlist
                            ? require("../../assets/images/heart.png")
                            : require("../../assets/images/heart-active.png"),
                    }}
                />
            </TouchableOpacity>
        </StyledProductItem>
    );
});

export default ProductItem;
