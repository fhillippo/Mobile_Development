import  React from "react";
import { TouchableOpacity, View, Text, ImageBackground, Image } from "react-native";

const Balik = ({ navigation }) => {
    return(
        // penampung
        <View style={{flex:1, backgroundColor:"#687EFF"}}>

            {/* ini adalah judul */}
            <Text style={{color:"white", fontSize:28, fontWeight:"bold", alignSelf:"center", top:38}}>Balikpapan</Text>
            {/* underline */}
            <View style={{borderBottomWidth:5, width:140, alignSelf:"center", borderBottomColor: 'white', top:43}}></View>
            {/* back button ke HomeScreen */}
            <TouchableOpacity
            onPress={() => navigation.navigate('ListCity')}
            style={{left:30, top:3}}>
                <Image source={require('./assets/backwhite.png')} style={{width:20, height:20}}/>
            </TouchableOpacity>

            {/* profil gubernur */}
            <Image
            source={require('./assets/pra.png')}
            style={{alignSelf:"center", top:100}}/>
            {/* keterangan */}
            <View
            style={{
                width:296, 
                height:63, 
                backgroundColor:"white",
                alignSelf:"center",
                top:130,
                borderRadius:18,
                justifyContent:"center"
                }}>
                    <Text style={{fontSize:13, left:15, bottom:1}}>Gubernur Pertama : A. P. T Pranoto</Text>
                    <Text style={{fontSize:13, left:15, top:1}}>Lama Menjabat : 1957 - 1959</Text>
                </View>

            {/* profil gubernur */}
            <Image
            source={require('./assets/ar.png')}
            style={{alignSelf:"center", top:190}}/>
                        {/* keterangan */}
            <View
            style={{
                width:296, 
                height:63, 
                backgroundColor:"white",
                alignSelf:"center",
                top:230,
                borderRadius:18,
                justifyContent:"center"
                }}>
                    <Text style={{fontSize:13, left:15, bottom:1}}>Wakil Gubernur Pertama : Muhammad Ardans</Text>
                    <Text style={{fontSize:13, left:15, top:1}}>Lama Menjabat : 1983 - 1988</Text>
                </View>
        </View>
    );
}

export default Balik;