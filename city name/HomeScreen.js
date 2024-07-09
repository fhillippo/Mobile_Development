import  React from "react";
import { TouchableOpacity, View, Text, ImageBackground, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
    return(
        // penampung
        <View style={{flex:1}}>

            {/* Background image */}
            <ImageBackground
            source={require("./assets/home.png")}
            style={{flex:1}}
            resizeMode="cover">

                {/* pembungkus ke 2 */}
                <View style={{flex:1, alignItems:"center"}}>

                    {/* ucapan selamat datang */}
                    <Image source={require('./assets/welcome.png')} style={{top:240}}/>

                    {/* list button */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate('ListCity')}
                    style={{
                        backgroundColor:"#687EFF",
                        top:295,
                        width:263,
                        height:63,
                        borderRadius:15,
                        alignItems:"center",
                        justifyContent:"center",
                        elevation:14,
                    }}>
                        <Text style={{fontSize:25, color:"white", fontWeight:"bold"}}>List</Text>
                    </TouchableOpacity>

                    {/* member button */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Member')}
                    style={{
                        backgroundColor:"#687EFF",
                        top:350,
                        width:263,
                        height:63,
                        borderRadius:15,
                        alignItems:"center",
                        justifyContent:"center",
                        elevation:14,
                    }}>
                        <Text style={{fontSize:25, color:"white", fontWeight:"bold"}}>Member</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;