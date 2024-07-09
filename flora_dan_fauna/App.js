import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LinearGradient from "react-native-linear-gradient";
import { View, Text } from "react-native"; 

// home
import Home from "./Home";

// flora
import Flora from "./Flora";

// Fauna
import Fauna from "./Fauna";

// Keajaiban Dunia
import KeajaibanDunia from "./KeajaibanDunia";

// membuat navigasi (stack navigator) dengan menggunakan library react navigation.
const Stack = createStackNavigator();

const App = () => {
    return(
    // mengelola navigasi dalam aplikasi menggunakan react navigation.
    <NavigationContainer>
{/* inisialisasi tumpukan navigator dengan rute awal yang ditentukan sebagai Home  */}
        <Stack.Navigator initialRouteName="Home">
            {/* setiap stack.screen merepresentasikan satu rute (layar) dalam tumpukan navigator.
            Anda dapat menambahkan lebih banyak stack.screen sesuai dengan kebutuhan aplikasi. */}
            {/* contoh */}
            {/* stack.screen name=namarute  component={namarute } */}
            {/* layar home akan menggunakan komponen homescreen untuk tampilan nya */}
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />

            {/* Flora */}
            <Stack.Screen name="Flora" component={Flora} options={{headerShown:false}} />

            {/* Fauna */}
            <Stack.Screen name="Fauna" component={Fauna} options={{headerShown:false}} />

            {/* KeajaibanDunia */}
            <Stack.Screen name="KeajaibanDunia" component={KeajaibanDunia} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App;