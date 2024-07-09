import  React from "react";
import { TouchableOpacity, View, Text, ImageBackground, Image } from "react-native";

const Bandar = ({ navigation }) => {
    return(
        // penampung
        <View style={{flex:1, backgroundColor:"#687EFF"}}>

            {/* ini adalah judul */}
            <Text style={{color:"white", fontSize:28, fontWeight:"bold", alignSelf:"center", top:38}}>Bandar Lampung</Text>
            {/* underline */}
            <View style={{borderBottomWidth:5, width:210, alignSelf:"center", borderBottomColor: 'white', top:43}}></View>
            {/* back button ke HomeScreen */}
            <TouchableOpacity
            onPress={() => navigation.navigate('ListCity')}
            style={{left:30, top:3}}>
                <Image source={require('./assets/backwhite.png')} style={{width:20, height:20}}/>
            </TouchableOpacity>

            {/* profil gubernur */}
            <Image
            source={require('./assets/ku.png')}
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
                    <Text style={{fontSize:13, left:15, bottom:1}}>Gubernur Pertama : Kusno Danu Danupoyo</Text>
                    <Text style={{fontSize:13, left:15, top:1}}>Lama Menjabat : 1964 - 1966</Text>
                </View>

            {/* profil gubernur */}
            <Image
            source={require('./assets/na.png')}
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
                    <Text style={{fontSize:13, left:15, bottom:1}}>Wakil Gubernur Pertama : Nadirsyah Zaini</Text>
                    <Text style={{fontSize:13, left:15, top:1}}>Lama Menjabat : 1 feb - 1 juli 1966</Text>
                </View>
        </View>
    );
}

export default Bandar;