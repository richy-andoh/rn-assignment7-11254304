import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartProvider } from './context/CartContext';

//const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
      <SafeAreaProvider>
        <HomeStack />
      </SafeAreaProvider>
    </NavigationContainer>
    </CartProvider>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
// function CheckoutTab() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === 'Checkout') {
//             iconName = 'cart';
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;

//         },
//         tabBarLabel: ({ focused, color }) => {
//           let label;

//           if (route.name === 'Checkout') {
//             label = 'Checkout';
//           }

//           return (
//             <Text style={{ color, fontSize: 16, paddingLeft: 8 }}>{label}</Text>
//           );
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//         tabBarLabelStyle: {
//           fontSize: 16,
//         },
//         tabBarIconStyle: {
//           marginRight: -10,
//         },
//         tabBarStyle: {
//           height: 100,
//           paddingBottom: 30,
//           paddingTop: 10,

//         },
//       }}
//     >
//       <Tab.Screen name="Checkout" component={CheckoutScreen}  options={{ headerShown: false}}/>
//     </Tab.Navigator>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
