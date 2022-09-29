import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

const Loading = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ActivityIndicator size="large" />
            <Text style={{ marginTop: 10 }}>Загрузка...</Text>
        </View>
    );
};

export default Loading;
