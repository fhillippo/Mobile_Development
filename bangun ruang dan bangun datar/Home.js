import React, {useSate} from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
    return(
        <View style={{ flex:1, backgroundColor:"#E4C7A1" }}>
            {/* ini logo */}
            <Image
            source={require("./assets/logo.png")} 
            style={{width:180, height:180, alignSelf:"center", marginTop:150}}/>

            {/* tombol bangun datar*/}
            <TouchableOpacity
            style={{backgroundColor:"#867D6E", width:252, height:68, borderRadius:15, alignSelf:"center", marginTop:88, justifyContent:"center"}}
            onPress={() => navigation.navigate("BangunDatar")}>
                {/* text bangun datar */}
                <Text
                style={{color:"white", alignSelf:"center", fontSize:16}}>Bangun Datar</Text>
            </TouchableOpacity>

            {/* tombol bangun ruang */}
            <TouchableOpacity
            style={{backgroundColor:"#867D6E", width:252, height:68, borderRadius:15, alignSelf:"center", marginTop:48, justifyContent:"center"}}
            onPress={() => navigation.navigate("BangunRuang")}>
                {/* text bangun ruang */}
                <Text
                style={{color:"white", alignSelf:"center", fontSize:16}}>Bangun Ruang</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;