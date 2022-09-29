import { observer } from "mobx-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { ProductItem, Pagination, Loading, Search } from "../../components";
import products from "../../store/products";

const HomeScreen = observer(({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        products.getAll(currentPage);
    }, [currentPage]);

    if (products.isLoading) {
        return <Loading />;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Search />
            <FlatList
                data={products.products.slice()}
                renderItem={(item) => (
                    <ProductItem key={item.item.id} data={item.item} />
                )}
                numColumns={2}
                contentContainerStyle={{
                    paddingVertical: 30,
                    paddingHorizontal: 15,
                }}
                columnWrapperStyle={{
                    justifyContent: "center",
                    gap: 15,
                }}
                ListFooterComponent={() => (
                    <Pagination
                        setCurrentPage={setCurrentPage}
                        productsCount={products.products.length}
                    />
                )}
            />
        </SafeAreaView>
    );
});

export default HomeScreen;
