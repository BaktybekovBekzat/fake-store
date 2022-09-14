import { observer } from "mobx-react";
import React from "react";
import { useEffect } from "react";
import {
    SafeAreaView,
    Text,
    FlatList,
    ActivityIndicator,
    View,
    Image,
    ScrollView,
} from "react-native";
import product from "../../store/product";

const HomeScreen = observer(({ navigation }) => {
    useEffect(() => {
        product.getAll();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {product.isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    scrollEnabled={true}
                    data={product.products}
                    renderItem={({ item }) => (
                        <View key={item.id}>
                            <Image source={{ uri: item.image, width: 200, height: 200 }} />
                            <Text>{item.title}</Text>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    );
});

export default HomeScreen;
