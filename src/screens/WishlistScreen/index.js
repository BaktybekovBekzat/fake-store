import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import wishlist from "../../store/wishlist";
import styled from "styled-components/native";
import { ProductItem } from "../../components";
import { observer } from "mobx-react";

const WishlistScreen = observer(({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {wishlist.products.length > 0 ? (
                <>
                    <FlatList
                        data={wishlist.products.slice()}
                        renderItem={(item) => (
                            <ProductItem key={item.item.id} data={item.item} />
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
                <Text style={{ textAlign: "center", marginTop: 30 }}>
                    Нет избранных товаров
                </Text>
            )}
        </SafeAreaView>
    );
});

export default WishlistScreen;
