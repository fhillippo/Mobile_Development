// membuat sebuah component dengan memiliki minimal 4 properti yang menggambarkan diri sendiri, dan bermain style
import React from "react";
import { View, Image, Text } from 'react-native';

 export const MySelf = (cg) => {
    return(
        <View style={{backgroundColor:"lightblue", flex:1}}>
            {/* Pemungkus data diri */}
            <View style={{alignItems:"center"}}>

                {/* ini profil gambar */}
                <Image 
                style={{width:130, height:130, alignItems:"center", marginTop:150}} 
                source={require("./assets/pp.png")}/>

                {/* Nama */}
                <Text style={{color:"white", fontSize:22, fontWeight:"bold", marginTop:20}}>{cg.name}</Text>
                <Text style={{color:"white", fontSize:22, fontWeight:"bold", marginTop:20}}>Umur : 17 tahun</Text>
                <Text style={{color:"white", fontSize:22, fontWeight:"bold", marginTop:20}}>Kebiasaan buruk : menunda waktu</Text>
                <Text style={{color:"white", fontSize:22, fontWeight:"bold", marginTop:20}}>Hobi : Coding, belajar bahasa asing</Text>
                <Text style={{color:"white", fontSize:22, fontWeight:"bold", marginTop:20}}>Fav song : Enter Sandman</Text>

                <Image
                style={{width:60, height:60, marginTop:150, marginRight:240}}
                source={require("./assets/ronia.jpeg")}/>
            </View>
        </View>
    );
}