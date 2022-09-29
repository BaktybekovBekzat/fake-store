import { observer } from "mobx-react";
import React, { useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { Loading, Pagination, ProductItem } from "../../components";
import products from "../../store/products";

const SearchScreen = observer(() => {
    const [currentPage, setCurrentPage] = useState(1);

    if (products.isLoading) {
        return <Loading />;
    }

    return (
        <SafeAreaView>
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 20,
                    marginTop: 20,
                }}
            >
                Результаты поиска
            </Text>
            <FlatList
                data={products.searchProducts.slice()}
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
                ListFooterComponent={() =>
                    products.searchProducts.length === 30 && (
                        <Pagination
                            setCurrentPage={setCurrentPage}
                            productsCount={products.searchProducts.length}
                        />
                    )
                }
            />
        </SafeAreaView>
    );
});

export default SearchScreen;
