import react, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const KelilingLingkaran = ({ navigation }) => {
    // Rumus keliling lingkaran :
    // keliling : 2 x π x r / π x r
    // π x r = diketahui jari jari
    // 2 x π x r = diketahui panjang nya

    // hitung dulu π x r nya
    const [π, ubahπ] = useState(0)
    const [r, ubahR] = useState(0)

    // π x r =
    const [jawab, ubahJawab] = useState(0)

    // request hasil dari x r nya untuk dikali dengan 2
    const [tanya, ubahTanya] = useState(0)
    
    // hitung keliling nya
    const [keliling, ubahKeliling] = useState(0)

    const eksekusi = () => {
        ubahTanya(parseFloat(π) * parseInt(r));
    }

    const result = () => {
        ubahKeliling(2 * parseInt(jawab));
    }
    return(
    <SafeAreaProvider>
        <View style={{flex:1, backgroundColor:"#6E6659"}}>
            {/* tombol back */}
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
                marginTop:10}}>
                    
                {/* gambar */}
                <Image source={require("./assets/lingkaran.png")}
                style={{alignSelf:"center", marginTop:15}}/>

                {/* judul */}
                <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:10}}>Lingkaran</Text>
            </View>

            {/* keliling : 2 x π x r */}
            {/* judul */}
            <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>keliling : 2 x π x r</Text>
            {/* 3,14 */}
            <Text style={{color:"white", marginTop:10, left:30, fontSize:16, fontWeight:"bold"}}>masukan π nya : 3,14</Text>

            {/* π (vi) */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
            placeholder="Masukan π"
            keyboardType="numeric"
            onChangeText={ubahπ}></TextInput>

            {/* r2 (jari - jari) */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
            placeholder="Masukan r"
            keyboardType="numeric"
            onChangeText={ubahR}></TextInput>

            {/* Press button π x r */}
            <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
            onPress={eksekusi}>
                <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>π x r =</Text>
            </TouchableOpacity>

            {/* hasil π x r */}
            <Text style={{color:"white", marginTop:10, left:30, fontSize:16, fontWeight:"bold"}}>Hasil π x r : {tanya}</Text>

            {/* pembugnkus dari 2 x hasil π x r */}
            <View
                style={{
                // backgroundColor:"white",
                padding: 20,
                width:334,
                height:5,
                alignSelf:"center",
                flex:2,
                flexDirection:"row",
                justifyContent:"space-around",
                borderRadius:18,
                }}>
                <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>2 x </Text>
                {/* hasil π x r */}
                <TextInput style={{width:150, height:50,  backgroundColor:"#E4C7A1", borderRadius:20, paddingLeft:10}}
                placeholder="hasil π x r"
                keyboardType="numeric"
                onChangeText={ubahJawab}></TextInput>
            </View>

            {/* hasil dari 2 x hasil π x r */}
            {/* Press button π x r */}
            <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
            >
                <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>K =</Text>
            </TouchableOpacity>
            
            {/* hasil keliling */}
            <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:10}}>Keliling : {keliling}</Text>

            {/* ke halaman luas */}
            
            <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", marginTop:50, elevation:10, marginBottom:28}}
            onPress={() => navigation.navigate("Lingkaran")}>
                <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>Hitung luas</Text>
            </TouchableOpacity>
            {/* Mark */}
        </View>
    </SafeAreaProvider>
    );
}

export default KelilingLingkaran;