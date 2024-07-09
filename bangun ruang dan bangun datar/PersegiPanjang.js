import react, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

const PersegiPanjang = ({ navigation }) => {
    // useState nya
    // Luas : Panjang x Lebar
    const [panjang, ubahPanjang] = useState(0)
    const [lebar, ubahLebar] = useState(0)

    // Keliling : Panjang + Lebar + P + L
    const [p1, ubahP1] = useState(0)
    const [l2, ubahL2] = useState(0)
    const [p3, ubahP3] = useState(0)
    const [l4, ubahL4] = useState(0)

    // luas dan keliling
    const [luas, ubahLuas] = useState(0)
    const [keliling, ubahKeliling] = useState(0)

    // hasil
    const hasil = () => {
        ubahLuas(parseInt(panjang) * parseInt(lebar));
        ubahKeliling(parseInt(p1) + parseInt(l2) + parseInt(p3) + parseInt(l4));
    }
    return (
        <View style={{flex:1, backgroundColor:"#6E6659"}}>
            {/* ini tombol back ke Bangun Datar */}
            <TouchableOpacity
            onPress={() => navigation.navigate("BangunDatar")}
            style={{marginTop:50, left:20}}>
                <Image 
                style={{width:35, height:30}}
                source={require("./assets/back.png")}/>
            </TouchableOpacity>

            {/* banner */}
            <TouchableOpacity style={{
                width:280, 
                height:150, 
                backgroundColor:"#C6BBA9",
                alignSelf:"center",
                marginTop:10,
                elevation:10}}
                onPress={hasil}>
                    
                {/* gambar */}
                <Image source={require("./assets/panjang.png")}
                style={{alignSelf:"center", marginTop:4}}/>

                {/* judul */}
                <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:15}}>Persegi Panjang</Text>
            </TouchableOpacity>

            {/* Luas : Panjang x Lebar */}
            {/* judul */}
            <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Luas : Panjang x Lebar</Text>

            {/* Panjang */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
            placeholder="Panjang"
            keyboardType="numeric"
            onChangeText={ubahPanjang}></TextInput>

            {/* Lebar */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
            placeholder="Lebar"
            keyboardType="numeric"
            onChangeText={ubahLebar}></TextInput>

            {/* Keliling : Panjang + Lebar + P + L */}
            {/* judul */}
            <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Keliling : Panjang + Lebar + P + L</Text>

            {/* Panjang */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
            placeholder="Panjang 1"
            keyboardType="numeric"
            onChangeText={ubahP1}></TextInput>

            {/* Lebar */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
            placeholder="Lebar 1"
            keyboardType="numeric"
            onChangeText={ubahL2}></TextInput>

            {/* + */}

            {/* Panjang */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
            placeholder="Panjang 2"
            keyboardType="numeric"
            onChangeText={ubahP3}></TextInput>

            {/* Lebar */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
            placeholder="Lebar 2"
            keyboardType="numeric"
            onChangeText={ubahL4}></TextInput>

            <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Luas = {luas}</Text>
            <Text style={{color:"white", marginTop:10, left:30, fontSize:16, fontWeight:"bold"}}>Keliling = {keliling}</Text>
        </View>
    );
}

export default PersegiPanjang;