import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import wishlist from "../../store/wishlist";
import styled from "styled-components/native";
import { ProductItem } from "../../components";
import { observer } from "mobx-react";

const StyledProductsList = styled.View`
    display: grid !important;
    grid-template-columns: 160px 160px;
    justify-content: center;
    gap: 10px;
    padding: 10px 15px;
`;

const WishlistScreen = observer(({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ paddingBottom: 30 }}>
                {wishlist.products.length > 0 ? (
                    <>
                        <StyledProductsList>
                            {wishlist.products.map((product) => {
                                return (
                                    <ProductItem
                                        data={product}
                                        key={product.id}
                                    />
                                );
                            })}
                        </StyledProductsList>
                    </>
                ) : (
                    <Text>Нет избранных товаров</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
});

export default WishlistScreen;
