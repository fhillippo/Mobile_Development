import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LinearGradient from "react-native-linear-gradient";
import { View, Text } from "react-native"; 

// home
import Home from "./Home";

// list bangun datar
import Datar from "./BangunDatar";

// List bangun ruang
import Ruang from "./BangunRuang";

// persegi
import Persegi from "./Persegi";

// Persegi Panjang
import PersegiPanjang from "./PersegiPanjang";

// Segitiga
import Segitiga from "./Segitiga";
import KelilingSegitiga from "./KelilingSegitiga";

// Jarjar Genjang
import JajarGenjang from "./JajarGenjang";

// Lingkaran
import Lingkaran from "./Lingkaran";
import KellilingLingkaran from "./KelilingLingkaran";

// Trapesium
import Trapesium from "./Trapesium";
import KelilingTrapesium from "./KelilingTrapesium";

// Kubus
import Kubus from "./Kubus";

// Balok
import Balok from "./Balok";

// Tabung
import Tabung from "./Tabung";

// Kerucut
import Kerucut from "./Kerucut.";

// Limas
import Limas from "./Limas";

// Splash Screen
import Splash from "./Splash";

// membuat navigasi (stack navigator) dengan menggunakan library react navigation.
const Stack = createStackNavigator();

const App = () => {
    return(
    // mengelola navigasi dalam aplikasi menggunakan react navigation.
    <NavigationContainer>
{/* inisialisasi tumpukan navigator dengan rute awal yang ditentukan sebagai Home  */}
        <Stack.Navigator initialRouteName="Splash">
            {/* setiap stack.screen merepresentasikan satu rute (layar) dalam tumpukan navigator.
            Anda dapat menambahkan lebih banyak stack.screen sesuai dengan kebutuhan aplikasi. */}
            {/* contoh */}
            {/* stack.screen name=namarute  component={namarute } */}
            {/* layar home akan menggunakan komponen homescreen untuk tampilan nya */}
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />

            {/* Bangun datar */}
            <Stack.Screen name="BangunDatar" component={Datar} options={{headerShown:false}} />

            {/* Bangun Ruang */}
            <Stack.Screen name="BangunRuang" component={Ruang} options={{headerShown:false}} />

            {/* persegi */}
            <Stack.Screen name="Persegi" component={Persegi} options={{headerShown:false}} />

            {/* persegi panjang */}
            <Stack.Screen name="PersegiPanjang" component={PersegiPanjang} options={{headerShown:false}} />

            {/* segitia */}
            <Stack.Screen name="Segitiga" component={Segitiga} options={{headerShown:false}} />
            <Stack.Screen name="KelilingSegitiga" component={KelilingSegitiga} options={{headerShown:false}} />

            {/* Jajar Genjang */}
            <Stack.Screen name="JajarGenjang" component={JajarGenjang} options={{headerShown:false}} />

            {/* Lingkaran */}
            <Stack.Screen name="Lingkaran" component={Lingkaran} options={{headerShown:false}} />
            <Stack.Screen name="KelilingLingkaran" component={KellilingLingkaran} options={{headerShown:false}} />

            {/* Trapesium */}
            <Stack.Screen name="Trapesium" component={Trapesium} options={{headerShown:false}} />
            <Stack.Screen name="KelilingTrapesium" component={KelilingTrapesium} options={{headerShown:false}} />

            {/* Kubus */}
            <Stack.Screen name="Kubus" component={Kubus} options={{headerShown:false}} />

            {/* Balok */}
            <Stack.Screen name="Balok" component={Balok} options={{headerShown:false}} />

            {/* Tabung */}
            <Stack.Screen name="Tabung" component={Tabung} options={{headerShown:false}} />

            {/* Kerucut */}
            <Stack.Screen name="Kerucut" component={Kerucut} options={{headerShown:false}} />

             {/* Limas */}
            <Stack.Screen name="Limas" component={Limas} options={{headerShown:false}} />

            {/* Splash Screen */}
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App;