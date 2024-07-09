import react, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Lingkaran = ({ navigation }) => {
    // Luas : π x r x r
    // hitung r x r nya dulu
    const [r1, ubahR1] = useState(0)
    const [r2, ubahR2] = useState(0)

    // kemudian hitung 3,14 x hasil r x r
    const [jawab, ubahJawab] = useState(0)

    // Luas :
    const [tanya, ubahTanya] = useState(0)
    const [luas, ubahLuas] = useState(0)

    // hasil
    const eksekusi = () => {
        ubahTanya(parseInt(r1) * parseInt(r2));
    }

    const result = () => {
        ubahLuas(3,14 * parseInt(jawab));
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

                {/* luas : π x r x r */}
                {/* judul */}
                <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>luas : π x r x r</Text>
                {/* 3,14 */}
                <Text style={{color:"white", marginTop:10, left:30, fontSize:16, fontWeight:"bold"}}>π : 3,14</Text>

                {/* r1 (jari - jari) */}
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                placeholder="Masukan r"
                keyboardType="numeric"
                onChangeText={ubahR1}></TextInput>

                {/* r2 (jari - jari) */}
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                placeholder="Masukan r"
                keyboardType="numeric"
                onChangeText={ubahR2}></TextInput>

                {/* Press button r x r */}
                <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                onPress={eksekusi}>
                    <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>r x r =</Text>
                </TouchableOpacity>

                {/* hasil r x r */}
                <Text style={{color:"white", marginTop:10, left:30, fontSize:16, fontWeight:"bold"}}>Hasil r x r : {tanya}</Text>

                {/* pembugnkus dari 3,14 x hasil r x r */}
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
                    <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>3,14 X </Text>
                    {/* hasil a x t */}
                    <TextInput style={{width:150, height:50,  backgroundColor:"#E4C7A1", borderRadius:20, paddingLeft:10}}
                    placeholder="hasil r x r"
                    keyboardType="numeric"
                    onChangeText={ubahJawab}></TextInput>
                </View>

                {/* hasil dari 3,14 x hasil r x r */}
                {/* Press button a x t */}
                <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                >
                    <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>L =</Text>
                </TouchableOpacity>
                
                {/* hasil luas */}
                <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:10}}>Luas : {luas}</Text>

                {/* ke halaman keliling */}
                
                <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", marginTop:50, elevation:10, marginBottom:28}}
                onPress={() => navigation.navigate("KelilingLingkaran")}>
                    <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>Hitung keliling</Text>
                </TouchableOpacity>
                {/* Mark */}
            </View>
        </SafeAreaProvider>
    );
}

export default Lingkaran;