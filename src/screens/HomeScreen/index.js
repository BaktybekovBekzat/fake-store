import { observer } from "mobx-react";
import React from "react";
import { useEffect } from "react";
import { SafeAreaView, ActivityIndicator, ScrollView } from "react-native";
import { ProductItem } from "../../components";
import products from "../../store/products";
import styled from "styled-components/native";

const StyledProductsList = styled.View`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 10px;
    padding: 10px 15px;
`;

const HomeScreen = observer(({ navigation }) => {
    useEffect(() => {
        products.getAll();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {products.isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <StyledProductsList>
                        {products.products.map((product) => {
                            return <ProductItem data={product} key={product.id} />;
                        })}
                    </StyledProductsList>
                )}
            </ScrollView>
        </SafeAreaView>
    );
});

export default HomeScreen;
