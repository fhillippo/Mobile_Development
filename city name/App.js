import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LinearGradient from "react-native-linear-gradient";
import { View, Text } from "react-native"; 

import LoginScreen from "./LoginScreen";
import SignScreen from "./SignScreen";
import HomeScreen from "./HomeScreen";
import MemberList from "./MemberList";

// daftar member
// Fhillippo
import FhMember from "./FhMember"; 

// CLarissa
import ClMember from "./ClMember";

// Nurmahera
import NmMember from "./NmMember";

// Dave
import DvMember from "./DvMember";
// daftar member

// ListCity
import ListCity from "./ListCity"
// Denpasar
import Denpasar from "./Denpasar";
// Yogyakarta
import Yogya from "./Yogya";
// Papua
import Papua from "./Papua";
// Lampung
import Bandar from "./Bandar";
// Aceh
import Aceh from "./Aceh";
// Aceh
import Go from "./Go";
// Medan
import Medan from "./Medan";
// Ambon
import Ambon from "./Ambon";
// Bandung
import Bandung from "./Bandung";
// Semarang
import Semarang from "./Semarang";
// Balikpapan
import Balik from "./Balik";
// Surabaya
import Sura from "./Sura";
// Serang
import Serang from "./Serang";
// Palembang
import Palembang from "./Palembang";
// Jakarta
import Dki from "./Dki";
// Pekan Baru
import Pekan from "./Pekan";
// Kupang
import Kupang from "./Kupang";

// membuat navigasi (stack navigator) dengan menggunakan library react navigation.
const Stack = createStackNavigator();

const App = () => {
    return(
    // mengelola navigasi dalam aplikasi menggunakan react navigation.
    <NavigationContainer>
{/* inisialisasi tumpukan navigator dengan rute awal yang ditentukan sebagai Home  */}
        <Stack.Navigator initialRouteName="SignScreen">
            {/* setiap stack.screen merepresentasikan satu rute (layar) dalam tumpukan navigator.
            Anda dapat menambahkan lebih banyak stack.screen sesuai dengan kebutuhan aplikasi. */}
            {/* contoh */}
            {/* stack.screen name=namarute  component={namarute } */}
            {/* layar home akan menggunakan komponen homescreen untuk tampilan nya */}
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            {/* layar detail akan menggunakan komponen detailscreen untuk tampilan nya */}
            <Stack.Screen name="Sign" component={SignScreen} options={{headerShown:false}}/>
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}

            {/* Screen member dan dafter member */}
            <Stack.Screen name="Member" component={MemberList} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="FhMember" component={FhMember} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="ClMember" component={ClMember} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="NmMember" component={NmMember} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="DvMember" component={DvMember} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="ListCity" component={ListCity} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Denpasar" component={Denpasar} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Yogya" component={Yogya} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Papua" component={Papua} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Bandar" component={Bandar} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Aceh" component={Aceh} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Go" component={Go} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Medan" component={Medan} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Ambon" component={Ambon} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Bandung" component={Bandung} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Semarang" component={Semarang} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Balik" component={Balik} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Sura" component={Sura} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Serang" component={Serang} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Palembang" component={Palembang} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Dki" component={Dki} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Pekan" component={Pekan} options={{headerShown:false}} />
            {/* layar profiles akan menggunakan komponen profilesscreen untuk tampilan nya */}
            <Stack.Screen name="Kupang" component={Kupang} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App;