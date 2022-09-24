import { observer } from "mobx-react";
import { useEffect } from "react";
import { SafeAreaView, Text, ActivityIndicator, View } from "react-native";
import cart from "../../store/cart";
import { CartItem } from "../../components/index";
import styled from "styled-components/native";

const StyledTotal = styled.View`
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CartScreen = observer(() => {
    useEffect(() => {
        cart.getCart();
    }, []);

    const sum = (arr) => {
        return arr.reduce((price, curr) => (price += curr.price), 0);
    };

    return (
        <SafeAreaView style={{ paddingLeft: 15, paddingRight: 15 }}>
            <View style={{ marginTop: 10 }}>
                {cart.isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <>
                        {cart.data.length > 0 ? (
                            cart.data.map((product) => (
                                <CartItem product={product} key={product.id} />
                            ))
                        ) : (
                            <Text style={{ fontWeight: 700, textAlign: "center", fontSize: 20 }}>
                                Корзина пуста
                            </Text>
                        )}
                    </>
                )}
            </View>
            <StyledTotal style={{ borderTop: "1px solid #000" }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>Total:</Text>
                <Text style={{ fontSize: 22, fontWeight: 700, color: "#85bb65" }}>
                    $ {sum(cart.data)}
                </Text>
            </StyledTotal>
        </SafeAreaView>
    );
});

export default CartScreen;
