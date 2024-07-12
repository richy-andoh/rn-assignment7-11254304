import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import remove from "../assets/remove.png";
import { useCart } from '../context/CartContext';
//import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;


const CheckoutItem = ({ navigation, id, title, description, price, image }) => {

    //const navigation = useNavigation();
    const { removeFromCart } = useCart();

    const handleRemoveFromCart = () => {
        removeFromCart(id);
    }

    return (
        <View style={[styles.container]}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("ProductDetailScreen", {
                    Product: {
                        id,
                        title,
                        description,
                        price,
                        image
                    }
                })}>
                    <Image style={styles.image} source={image} />
                </TouchableOpacity>
            </View>

            <View style={{ width: 200, marginLeft: 10 }}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.description} numberOfLines={3}>{description}</Text>
                <Text style={styles.price}>$ {price}</Text>
                <TouchableOpacity onPress={handleRemoveFromCart} style={{ alignSelf: "flex-end", marginTop: 20, marginRight: 25 }} >
                    <Image source={remove} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const CheckoutProduct = ({ navigation }) => {

    const { cartItems } = useCart();


    return (
        <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <CheckoutItem
                        id={item.id}
                        description={item.description}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        navigation={navigation}
                    />
                </TouchableOpacity>
            )}
            scrollEnabled={false}
        />
    )
}

export default CheckoutProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //width: width,
        padding: 10,
        marginHorizontal: 10,
        alignContent: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        // Android elevation property
        elevation: 4,

    },
    image: {
        borderRadius: 5,
        height: 210,
        width: 160
    },
    name: {
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        opacity: 0.7,
        fontSize: 16,
        marginTop: 6
    },
    price: {
        fontSize: 18,
        color: 'red',
        marginTop: 10,
        opacity: 0.8
    },
});
