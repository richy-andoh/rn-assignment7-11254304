

import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import Logo from "../assets/Logo.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckoutProduct from "../components/CheckoutProduct";
import shoppingBag from "../assets/shoppingBag.png";
import { useCart } from "../context/CartContext";

const width = Dimensions.get('window').width;

const CheckoutScreen = ({ navigation }) => {
    const { cartItems } = useCart();
    const cartItemCount = cartItems.length;
    const totalCost = cartItems.reduce((sum, item) => sum + parseFloat(item.price) || 0, 0);

    return (
        <View style={styles.container}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                <View style={{ marginLeft: 15}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Ionicons name="arrow-back-outline" color="gray" size={32} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image source={Logo} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginRight: 16 }}>
                    <Ionicons name="search-outline" size={35} />
                </View>
            </View>

            <View style={{ marginTop: 24 }}>
                <Text style={{ textAlign: "center", fontSize: 25 }}>CHECKOUT</Text>
                <View style={{ width: 130, backgroundColor: "gray", height: 0.5, alignSelf: "center", marginVertical: 10 }} />
            </View>

            {cartItemCount > 0 ? (
                <>
                    <ScrollView style={styles.scrollViewContent}>
                        <CheckoutProduct navigation={navigation} />
                    </ScrollView>

                    <View style={styles.footer}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 20, marginHorizontal: 25, zIndex: 1000, paddingTop: 10 }}>
                            <Text style={{ color: "gray", marginLeft: 10, fontSize: 20 }}>EST. TOTAL</Text>
                            <Text style={{ color: "red", marginRight: 20, fontSize: 20 }}>${totalCost.toFixed(2)}</Text>
                        </View>
                        <View style={styles.checkoutButton}>
                            <Image source={shoppingBag} style={{ height: 45, width: 45, color: "#fff", marginRight: 15 }} />
                            <View style={styles.cartItemCountContainer}>
                                <Text style={styles.cartItemCountText}>{cartItemCount}</Text>
                            </View>
                            <Text style={{ color: "white", fontSize: 25, marginLeft: 15 }}>Checkout</Text>
                        </View>
                    </View>
                </>
            ) : (
                <Text style={{ textAlign: "center", marginTop: 30, fontSize: 22 }}>Your cart is Empty</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: width
    },
    scrollViewContent: {
        paddingBottom: 120,
    },
    cartItemCountContainer: {
        position: 'absolute',
        top: 12,
        right: 255,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    cartItemCountText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: "lightgrey"
    },
    checkoutButton: {
        height: 70,
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CheckoutScreen;
