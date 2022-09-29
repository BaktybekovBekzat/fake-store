import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { TextInput, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import products from "../../store/products";

const StyledSearch = styled.View`
    border: 1px solid #000;
    margin: 20px 10px;
    margin-bottom: 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
`;

const Search = observer(() => {
    const [search, setSearch] = useState("");
    const navigation = useNavigation();

    const submitSearch = (text = "") => {
        if (!text) return;

        products.search(text);
        navigation.navigate("Search");
    };

    return (
        <StyledSearch>
            <TextInput
                placeholder="Поиск..."
                value={search}
                onChangeText={(val) => setSearch(val)}
                style={{
                    width: "90%",
                    paddingVertical: 5,
                    paddingLeft: 15,
                }}
            />
            <TouchableOpacity onPress={() => submitSearch(search)}>
                <Image
                    source={require("../../assets/images/search.png")}
                    style={{
                        width: 20,
                        height: 20,
                    }}
                />
            </TouchableOpacity>
        </StyledSearch>
    );
});

export default Search;
