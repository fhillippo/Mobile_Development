import React from "react";
import { View, Image, Text} from "react-native";

const Idle1 = (props) => {
    return(
        
            <View style={{alignSelf:"center", backgroundColor:"lightblue", width:300, height:350, marginTop:100, alignItems:"center", justifyContent:"center"}}>
                <Image
                style={{width:150,height:150}}
                source={require("./assets/kyoto.png")}/>

                <Text style={{color:"white", fontSize:25, marginTop:20}}>Nama : {props.nama}</Text>
                <Text style={{color:"white", fontSize:25}}>Lokasi : {props.lokasi}</Text>
                <Text style={{color:"white", fontSize:25}}>Favorit : GameDev</Text>
                <Text style={{color:"white", fontSize:25}}>Peringkat : Ke Tiga</Text>
            </View>
    );
}

const Idle2 = (props) => {
    return(
        <View style={{alignSelf:"center", backgroundColor:"lightgreen", width:300, height:350, marginTop:100, alignItems:"center", justifyContent:"center"}}>
                <Image
                style={{width:150,height:150}}
                source={require("./assets/ox.jpg")}/>

                <Text style={{color:"white", fontSize:25, marginTop:20}}>Nama : Oxford</Text>
                <Text style={{color:"white", fontSize:25}}>Lokasi : United Kingdom</Text>
                <Text style={{color:"white", fontSize:25}}>Favorit : GameDev</Text>
                <Text style={{color:"white", fontSize:25}}>Peringkat : Ke Tiga</Text>
            </View>
    );
}

const Idle3 = (props) => {
    return(
        <View style={{alignSelf:"center", backgroundColor:"purple", width:300, height:350, marginTop:100, alignItems:"center", justifyContent:"center"}}>
                <Image
                style={{width:150,height:150}}
                source={require("./assets/harvard.jpg")}/>

                <Text style={{color:"white", fontSize:25, marginTop:20}}>Nama : Harvard</Text>
                <Text style={{color:"white", fontSize:25}}>Lokasi : United State</Text>
                <Text style={{color:"white", fontSize:25}}>Favorit : GameDev</Text>
                <Text style={{color:"white", fontSize:25}}>Peringkat : Ke Tiga</Text>
            </View>
    );
}

export { Idle1, Idle2, Idle3 };