import { observer } from "mobx-react";
import React from "react";
import { useEffect } from "react";
import { SafeAreaView, ActivityIndicator, ScrollView } from "react-native";
import { ProductItem } from "../../components";
import product from "../../store/product";
import styled from "styled-components/native";

const StyledProductsList = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 15px;
`;

const HomeScreen = observer(({ navigation }) => {
    useEffect(() => {
        product.getAll();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {product.isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <StyledProductsList>
                        {product.products.map((product) => {
                            return (
                                <ProductItem data={product} key={product.id} />
                            );
                        })}
                    </StyledProductsList>
                )}
            </ScrollView>
        </SafeAreaView>
    );
});

export default HomeScreen;
