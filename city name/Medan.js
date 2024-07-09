import  React from "react";
import { TouchableOpacity, View, Text, ImageBackground, Image } from "react-native";

const Medan = ({ navigation }) => {
    return(
        // penampung
        <View style={{flex:1, backgroundColor:"#687EFF"}}>

            {/* ini adalah judul */}
            <Text style={{color:"white", fontSize:28, fontWeight:"bold", alignSelf:"center", top:38}}>Medan</Text>
            {/* underline */}
            <View style={{borderBottomWidth:5, width:85, alignSelf:"center", borderBottomColor: 'white', top:43}}></View>
            {/* back button ke HomeScreen */}
            <TouchableOpacity
            onPress={() => navigation.navigate('ListCity')}
            style={{left:30, top:3}}>
                <Image source={require('./assets/backwhite.png')} style={{width:20, height:20}}/>
            </TouchableOpacity>

            {/* profil gubernur */}
            <Image
            source={require('./assets/su.png')}
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
                    <Text style={{fontSize:13, left:15, bottom:1}}>Gubernur Pertama : Sutan Amin Nasution</Text>
                    <Text style={{fontSize:13, left:15, top:1}}>Lama Menjabat : 1948 - 1949</Text>
                </View>

            {/* profil gubernur */}
            <Image
            source={require('./assets/man.png')}
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
                    <Text style={{fontSize:13, left:15, bottom:1}}>Wakil Gubernur Pertama : Prof. Dr. T Manoser</Text>
                    <Text style={{fontSize:13, left:15, top:1}}>Lama Menjabat : 1957 - 1959</Text>
                </View>
        </View>
    );
}

export default Medan;