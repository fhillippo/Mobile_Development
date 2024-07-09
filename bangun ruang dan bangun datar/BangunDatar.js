import React, {useSate} from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";


const DATA = [
    {
        image : require("./assets/persegi.png"),
        nama : "PERSEGI",
        change : "Persegi",
    },
    {
        image : require("./assets/panjang.png"),
        nama : "PERSEGI PANJANG",
        change : "PersegiPanjang"
    },
    {
        image : require("./assets/segitiga.png"),
        nama : "SEGITIGA",
        change : "Segitiga"
    },
    {
        image : require("./assets/jajar.png"),
        nama : "JAJAR GENJANG",
        change : "JajarGenjang"
    },
    {
        image : require("./assets/lingkaran.png"),
        nama : "LINGKARAN",
        change : "Lingkaran"
    },
    {
        image : require("./assets/trapesium.png"),
        nama : "TRAPESIUM",
        change : "Trapesium"
    },
]
const Datar = ({ navigation }) => {
    return(
        <View style={{flex:1, backgroundColor:"#6E6659"}}>
            {/* ini judul */}
            <Text style={{
                color:"white",
                alignSelf:"center",
                marginTop:80,
                fontSize:23,
                fontWeight:"bold"
            }}>Bangun Datar</Text>
            {/* ini judul */}

            {/* ini tombol back ke home */}
            <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{marginTop:-27, left:20}}>
                <Image 
                style={{width:35, height:30}}
                source={require("./assets/back.png")}/>
            </TouchableOpacity>
            {/* ini tombol back ke home */}
            
            {/* kotak panjang flatlist */}
            <FlatList
            data={DATA}
            style={{marginTop:1}}
            contentContainerStyle={{ paddingBottom: 70 }}
            renderItem={({ item }) => (
                <View style={{marginTop:40}}>

                    {/* tombol */}
                    <TouchableOpacity
                    style={{
                        padding:200,
                        backgroundColor:"#E4C7A1",
                        padding:20,
                        width:294,
                        height:150,
                        alignSelf:"center",
                        borderRadius:20,
                        alignItems:'center',
                        flex:2,
                        flexDirection:'column',
                        justifyContent:"center"
                    }}
                    onPress={() => navigation.navigate(item.change)}>
                        {/* gambar */}
                        <Image
                        style={{}}
                        source={item.image}/>

                        {/* nama */}
                        <Text style={{fontSize:17}}>{item.nama}</Text>
                    </TouchableOpacity>
                </View>
            )} />
        </View>
    );
}

export default Datar;