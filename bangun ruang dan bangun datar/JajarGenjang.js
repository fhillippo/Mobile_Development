import react, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
// agar komponen tidak mentok keatas tanpa menggunakan marginTop
import { SafeAreaProvider } from "react-native-safe-area-context";

const JajarGenjang = ({ navigation }) => {
    // luas
    const [alas, ubahAlas] = useState(0)
    const [tinggi, ubahTinggi] = useState(0)

    // kelliling
    const [a, ubahA] = useState(0)
    const [b, ubahB] = useState(0)

    // menghitung hasil
    const [luas, ubahLuas] = useState(0)
    const [keliling, ubahKeliling] = useState(0)

    // hasil nya
    const hasil = () => {
        ubahLuas(parseInt(alas) * parseInt(tinggi));
        ubahKeliling((parseInt(a) + parseInt(b)) * 2);
    }
    return(
        // memanggil SaveAreaProvider
        <SafeAreaProvider>
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
            <View style={{
                width:280, 
                height:150, 
                backgroundColor:"#C6BBA9",
                alignSelf:"center",
                marginTop:10}}
                >
                    
                    {/* gambar */}
                    <Image source={require("./assets/jajar.png")}
                    style={{alignSelf:"center", width:210, height:120, marginTop:-2}}/>

                    {/* judul */}
                    <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:-10}}>Jajar Genjang</Text>
                </View>

                {/* Luas = a x t */}
                <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Luas : a x t</Text>
                
                {/* alas (a) */}
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                placeholder="alas (a)"
                keyboardType="numeric"
                onChangeText={ubahAlas}></TextInput>
                
                {/* tinggi (t) */}
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                placeholder="tinggi (t)"
                keyboardType="numeric"
                onChangeText={ubahTinggi}></TextInput>

                {/* Keliling 2 x (a + b) */}
                <Text style={{color:"white", marginTop:15, left:30, fontSize:16, fontWeight:"bold"}}>Keliling : 2 x (a + b) </Text>

                                
                {/* A */}
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                placeholder="A"
                keyboardType="numeric"
                onChangeText={ubahA}></TextInput>
                
                {/* B */}
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                placeholder="B"
                keyboardType="numeric"
                onChangeText={ubahB}></TextInput>

                <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                onPress={hasil}>
                    <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>Check</Text>
                </TouchableOpacity>

                {/* hasil luas */}
                <Text style={{color:"white", marginTop:15, left:30, fontSize:16, fontWeight:"bold"}}>Luas = {luas} </Text>

                {/* Keliling 2 x (a + b) */}
                <Text style={{color:"white", marginTop:15, left:30, fontSize:16, fontWeight:"bold"}}>Keliling = {keliling} </Text>
            </View>
        </SafeAreaProvider>
    );
}

export default JajarGenjang;