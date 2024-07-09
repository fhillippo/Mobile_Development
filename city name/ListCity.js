import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const DATA = [
    {
        kota:"Kota : Denpasar",
        pv:'Provinsi : Bali',
        tahun:"Tahun berdiri : 1788",
        image: require('./assets/bali.png'),
        change:"Denpasar",
    },
    {
        kota:"Kota : Yogyakarta",
        pv:'Provinsi : istimewa Yogyakarta',
        tahun:"Tahun berdiri : 13 Maret 1755",
        image: require('./assets/yog.png'),
        change:"Yogya",
    },
    {
        kota:"Kota : Jayapura",
        pv:'Provinsi : Papua',
        tahun:"Tahun berdiri : 21 september 1993",
        image: require('./assets/jay.png'),
        change:"Papua",
    },
    {
        kota:"Kota : Bandar Lampung ",
        pv:'Provinsi : Lampung',
        tahun:"Tahun berdiri : 17 Juni 1682",
        image: require('./assets/bandar.png'),
        change:"Bandar",
    },
    {
        kota:"Kota : Bandar Aceh",
        pv:'Provinsi : Aceh',
        tahun:"Tahun berdiri : 22 April 1205",
        image: require('./assets/aceh.png'),
        change:"Aceh",
    },
    {
        kota:"Kota : Gorontalo",
        pv:'Provinsi : Gorontalo',
        tahun:"Tahun berdiri : 20 Mei 1960",
        image: require('./assets/gor.png'),
        change:"Go",
    },
    {
        kota:"Kota : Medan",
        pv:'Provinsi : Sumatra Utara',
        tahun:"Tahun berdiri : 1 April 1909",
        image: require('./assets/medan.png'),
        change:"Medan",
    },
    {
        kota:"Kota : Ambon",
        pv:'Provinsi : Maluku',
        tahun:"Tahun berdiri : 1959",
        image: require('./assets/ambon.png'),
        change:"Ambon",
    },
    {
        kota:"Kota : Bandung",
        pv:'Provinsi : Jawa Barat',
        tahun:"Tahun berdiri : 1810",
        image: require('./assets/bandung.png'),
        change:"Bandung",
    },
    {
        kota:"Kota : Semarang",
        pv:'Provinsi : Jawa Tengah',
        tahun:"Tahun berdiri : 1547",
        image: require('./assets/smr.png'),
        change:"Semarang",
    },
    {
        kota:"Kota : Balikpapan",
        pv:'Provinsi : Kalimantan Timur',
        tahun:"Tahun berdiri : 1959",
        image: require('./assets/papan.png'),
        change:"Balik",
    },
    {
        kota:"Kota : Surabaya",
        pv:'Provinsi : Jawa Timur',
        tahun:"Tahun berdiri : 1293",
        image: require('./assets/sr.png'),
        change:"Sura",
    },
    {
        kota:"Kota : Serang",
        pv:'Provinsi : Banten',
        tahun:"Tahun berdiri : 1526",
        image: require('./assets/serang.png'),
        change:"Serang",
    },
    {
        kota:"Kota : Palembang",
        pv:'Provinsi : Sumatra Selatan',
        tahun:"Tahun berdiri : 688 masehi",
        image: require('./assets/pl.png'),
        change:"Palembang",
    },
    {
        kota:"Kota : Jakarta",
        pv:'Provinsi : DKI Jakarta',
        tahun:"Tahun berdiri : 1527",
        image: require('./assets/dki.png'),
        change:"Dki",
    },
    {
        kota:"Kota : Pekanbaru",
        pv:'Provinsi : Riau',
        tahun:"Tahun berdiri : 23 Juni 1784",
        image: require('./assets/riau.png'),
        change:"Pekan",
    },
    {
        kota:"Kota : Kupang",
        pv:'Provinsi : Nusa Tenggara Timur',
        tahun:"Tahun berdiri : 1653",
        image: require('./assets/kp.png'),
        change:"Kupang",
    },
]

const ListCity = ({ navigation }) => {
  return (
    <View style={{ flex:1, backgroundColor:"#687EFF" }}>

        {/* ini judul */}
        <Text style={{color:"white", fontSize:38, fontWeight:"bold", alignSelf:"center", top:38}}>List</Text>
        {/* underline */}
        <View style={{borderBottomWidth:5, width:110, alignSelf:"center", borderBottomColor: 'white', top:35}}></View>
        {/* back button ke HomeScreen */}
        <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{left:30}}>
            <Image source={require('./assets/backwhite.png')} style={{width:20, height:20}}/>
        </TouchableOpacity>
        <FlatList
        // Properti data mengambil daftar data yang akan ditampilkan dalam FlatList.
        // DATA adalah variabel atau konstanta yang berisi daftar aray yang ingin di tampilkan dalam daftar.
        data={DATA}
        // Properti renderItem adalah fungsi yang akan digunakan untuk merender setiap array dalam daftar.
        // argumen item mewakili data pada array untuk dirender.
        style={{marginTop:50}}
        contentContainerStyle={{ paddingBottom: 70 }}
        renderItem={({ item }) => (
          <View style={{marginTop:21}}>
            {/* kotak panjang flatlist */}
            <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        padding: 20,
                        width:334,
                        height:123,
                        flexDirection: "row",
                        alignSelf:"center",
                        flex:2,
                        flexDirection:"row",
                        borderRadius:18,
                        alignItems:"center",
                    }}
                    onPress={() => navigation.navigate(item.change)}>
                <Image
                    source={item.image}
                />
                <View>
                    <Text style={{ fontSize: 12, bottom:8, left:13 }}>{item.kota}</Text>
                    <Text style={{ fontSize: 12, left:13 }}>{item.pv}</Text>
                    <Text style={{ fontSize: 12, top:8, left:13 }}>{item.tahun}</Text>
                </View>
            </TouchableOpacity>
            {/* kotak panjang flatlist */}
          </View>
        )}
      />
    </View>
  );
};

export default ListCity;
