import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const PaginationBtn = styled.Text`
    padding: 5px 10px;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff;
    background-color: #000;
    text-align: center;
    width: 100px;
`;

const Pagination = ({ setCurrentPage, productsCount }) => {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                columnGap: 10,
                marginTop: 20,
            }}
        >
            <TouchableOpacity
                onPress={() =>
                    setCurrentPage((prev) => (prev !== 1 ? prev - 1 : prev))
                }
            >
                <PaginationBtn>Пред</PaginationBtn>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    setCurrentPage((prev) =>
                        productsCount === 30 ? prev + 1 : prev
                    )
                }
            >
                <PaginationBtn>След</PaginationBtn>
            </TouchableOpacity>
        </View>
    );
};

export default Pagination;
