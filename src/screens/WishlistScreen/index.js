import React from "react";
import { FlatList, SafeAreaView, ScrollView, Text } from "react-native";
import wishlist from "../../store/wishlist";
import styled from "styled-components/native";
import { ProductItem } from "../../components";
import { observer } from "mobx-react";

const StyledProductsList = styled.View`
    display: flex;
    flex: 2;
    gap: 10px;
    padding: 10px 15px;
`;

const WishlistScreen = observer(({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ paddingBottom: 30 }}>
                {wishlist.products.length > 0 ? (
                    <>
                        <FlatList
                            data={wishlist.products}
                            renderItem={(item) => (
                                <ProductItem
                                    key={item.item.id}
                                    data={item.item}
                                />
                            )}
                            numColumns={2}
                            contentContainerStyle={{
                                paddingVertical: 30,
                                paddingHorizontal: 15,
                                gap: 15,
                            }}
                            columnWrapperStyle={{
                                gap: 15,
                                justifyContent: "center",
                            }}
                        ></FlatList>
                    </>
                ) : (
                    <Text>Нет избранных товаров</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
});

export default WishlistScreen;
