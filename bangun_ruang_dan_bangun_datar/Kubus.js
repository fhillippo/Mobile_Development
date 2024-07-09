import react, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Kubus = ({ navigation }) => {
    // Volume = S x S x S
    const [s, ubahS] = useState(0)
    const [v, ubahV] = useState(0)

    const volum = () => {
        ubahV(parseInt(s) * parseInt(s) * parseInt(s) * parseInt(s));
    }

    // Luas = 6 x S x S
    const [s2, ubahS2] = useState(0)
    const [l, ubahL] = useState(0)

    const luas = () => {
        ubahL(6 * parseInt(s2) * parseInt(s2));
    }

    // Keliling = 12 x Rusuk Kubus
    const [rusuk, ubahRusuk] = useState(0)
    const [k, ubahK] = useState(0)

    const keliling = () => {
        ubahK(12 * parseInt(rusuk));
    }
    return(
        <SafeAreaProvider>
            <View style={{flex:1, backgroundColor:"#6E6659"}}>
                <ScrollView>
                    {/* ini tombol back ke Bangun Ruangr */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate("BangunRuang")}
                    style={{marginTop:50, left:20}}>
                        <Image 
                        style={{width:35, height:30}}
                        source={require("./assets/back.png")}/>
                    </TouchableOpacity>

                    {/* banner */}
                    <View style={{
                        width:350, 
                        height:150, 
                        backgroundColor:"#C6BBA9",
                        alignSelf:"center",
                        marginTop:10}}>
                        
                        {/* gambar */}
                        <Image source={require("./assets/kubus.png")}
                        style={{alignSelf:"center", marginTop:28}}/>

                        {/* judul */}
                        <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:2}}>Kubus</Text>
                    </View>

                    {/* Pembungkus Volume */}
                    <View style={{width:350, height:250, backgroundColor:"#E4C7A1", alignSelf:"center", marginTop:20, borderRadius:20, alignItems:"center"}}>

                        {/* judul volume kubus */}
                        <Text style={{fontSize:24, color:"white", marginTop:25, fontWeight:"bold"}}>Volume = S x S x S</Text>

                        {/* input nilai */}
                        <TextInput 
                        style={{width:200, borderWidth:2, borderColor:"#6E6659", marginTop:10, borderRadius:20, textAlign:"center"}}
                        keyboardType="numeric"
                        placeholder="Masukan nilai S"
                        onChangeText={ubahS}/>

                        {/* button hasil volume */}
                        <TouchableOpacity style={{backgroundColor:"#6E6659", width:200, height:35, marginTop:10, borderRadius:20, alignItems:"center", justifyContent:"center"}}
                        onPress={volum}>
                            <Text style={{color:"white", fontSize:15, fontWeight:"bold"}}>Volume =</Text>
                        </TouchableOpacity>

                        <View style={{borderRadius:20, width:200, height:35, borderColor:"#6E6659", borderWidth:2, marginTop:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:"white", fontSize:15, fontWeight:"bold"}}>{v}</Text>
                        </View>
                    </View>
                    

                    {/* Pembungkus luas */}
                    <View style={{width:350, height:250, backgroundColor:"#E4C7A1", alignSelf:"center", marginTop:20, borderRadius:20, alignItems:"center"}}>

                        {/* judul luas kubus */}
                        <Text style={{fontSize:24, color:"white", marginTop:25, fontWeight:"bold"}}>Luas = 6 x S x S</Text>

                        {/* input nilai */}
                        <TextInput 
                        style={{width:200, borderWidth:2, borderColor:"#6E6659", marginTop:10, borderRadius:20, textAlign:"center"}}
                        keyboardType="numeric"
                        placeholder="Masukan nilai S"
                        onChangeText={ubahS2}/>

                        {/* button hasil luas */}
                        <TouchableOpacity style={{backgroundColor:"#6E6659", width:200, height:35, marginTop:10, borderRadius:20, alignItems:"center", justifyContent:"center"}}
                        onPress={luas}>
                            <Text style={{color:"white", fontSize:15, fontWeight:"bold"}}>Luas =</Text>
                        </TouchableOpacity>

                        {/* box hasil */}
                        <View style={{borderRadius:20, width:200, height:35, borderColor:"#6E6659", borderWidth:2, marginTop:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:"white", fontSize:15, fontWeight:"bold"}}>{l}</Text>
                        </View>
                    </View>


                    {/* Pembungkus keliling */}
                    <View style={{width:350, height:250, backgroundColor:"#E4C7A1", alignSelf:"center", marginTop:20, borderRadius:20, alignItems:"center"}}>

                        {/* judul keliling kubus */}
                        <Text style={{fontSize:24, color:"white", marginTop:25, fontWeight:"bold"}}>Keliling = 12 x Rusuk Kubus</Text>

                        {/* input nilai */}
                        <TextInput 
                        style={{width:200, borderWidth:2, borderColor:"#6E6659", marginTop:10, borderRadius:20, textAlign:"center"}}
                        keyboardType="numeric"
                        placeholder="Masukan nilai Rusuk"
                        onChangeText={ubahRusuk}/>

                        {/* button hasil keliling */}
                        <TouchableOpacity style={{backgroundColor:"#6E6659", width:200, height:35, marginTop:10, borderRadius:20, alignItems:"center", justifyContent:"center"}}
                        onPress={keliling}>
                            <Text style={{color:"white", fontSize:15, fontWeight:"bold"}}>Keliling =</Text>
                        </TouchableOpacity>

                        {/* box hasil */}
                        <View style={{borderRadius:20, width:200, height:35, borderColor:"#6E6659", borderWidth:2, marginTop:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:"white", fontSize:15, fontWeight:"bold"}}>{k}</Text>
                        </View>
                    </View>

                    <View style={{height:40}}></View>
                </ScrollView>
            </View>
        </SafeAreaProvider>
    );
}

export default Kubus;