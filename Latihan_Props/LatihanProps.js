// react digunakan untuk memanggil sintaks jss
import React from 'react';
import { View, Text, Image } from 'react-native';

// Membuat sebuah funtion component dengan nama LatihanProps
// Memanggil parameter proprs dengan properti "nama"
// Menambahkan parameter props pada component "Latihan"
export const Latihan = (props) =>{
    return (
        <View>
            <Text>{props.name}</Text>
            <Image 
            style={{width:100, height:100}} 
            source={require("./assets/ronia.jpeg")}/>
        </View>
    );
}
    // melakukan import dari component yang dibuat agar bisa dipanggil pada file lain
// export Latihan;