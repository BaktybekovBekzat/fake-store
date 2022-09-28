import { observer } from "mobx-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { SafeAreaView, ActivityIndicator, ScrollView } from "react-native";
import { ProductItem, Pagination } from "../../components";
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
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        products.getAll(currentPage);
    }, [currentPage]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ paddingBottom: 30 }}>
                {products.isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <>
                        <StyledProductsList>
                            {products.products.map((product) => {
                                return (
                                    <ProductItem
                                        data={product}
                                        key={product.id}
                                    />
                                );
                            })}
                        </StyledProductsList>
                        <Pagination
                            setCurrentPage={setCurrentPage}
                            productsCount={products.products.length}
                        />
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
});

export default HomeScreen;
