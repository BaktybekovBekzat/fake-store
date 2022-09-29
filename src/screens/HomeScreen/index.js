import { observer } from "mobx-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { SafeAreaView, FlatList, ScrollView } from "react-native";
import { ProductItem, Pagination, Loading } from "../../components";
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
            <ScrollView>
                <FlatList
                    data={products.products}
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
                />
                <Pagination
                    setCurrentPage={setCurrentPage}
                    productsCount={products.products.length}
                />
            </ScrollView>
        </SafeAreaView>
    );
});

export default HomeScreen;
