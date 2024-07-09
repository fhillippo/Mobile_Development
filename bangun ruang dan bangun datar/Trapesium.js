import react, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Trapesium = ({ navigation }) => {
    // Luas trapesium : 1/2 x ( a + b ) x t
    const [a, ubahA] = useState(0)
    const [b, ubahB] = useState(0)

    const [t, ubahT] = useState(0)

    const [hasilab, hasilAB] = useState(0)
    const [tanya, ubahTanya] = useState(0)

    const [returnback, ubahReturnback] = useState()
    const [output, ubahOutput] = useState(0)
    const [luas, ubahLuas] = useState(0)

    const eksekusi1 = () => {
        ubahTanya(parseInt(a) + parseInt(b));
    }

    const eksekusi2 = () => {
        ubahReturnback(parseInt(hasilab) * parseInt(t));
    }

    const hasil = () => {
        ubahLuas(1/2 * parseInt(output))
    }

    return(
        <SafeAreaProvider>
            <View style={{flex:1, backgroundColor:'#6E6659'}}>
                <ScrollView>
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
                        marginTop:10}}>
                        
                        {/* gambar */}
                        <Image source={require("./assets/trapesium.png")}
                        style={{alignSelf:"center", marginTop:28}}/>

                        {/* judul */}
                        <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:2}}>Trapesium</Text>
                    </View>

                    {/* judul */}
                    <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Luas : 1/2 x (A + B) x T</Text>

                    {/* masukan nilai a */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan nilai A"
                    keyboardType="numeric"
                    onChangeText={ubahA}/>

                    {/* masukan nilai b */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan nilai B"
                    keyboardType="numeric"
                    onChangeText={ubahB}/>

                    {/* hasil a + b */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={eksekusi1}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>A x B =</Text>
                    </TouchableOpacity>
                    
                    {/* output hasil dari a + b */}
                    <Text
                    style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}> hasil A + B = {tanya}</Text>

                    {/* pembugnkus dari 1/2 x hasil a dan t */}
                    <View
                    style={{
                        // backgroundColor:"white",
                        padding: 20,
                        width:334,
                        height:100,
                        alignSelf:"center",
                        flex:2,
                        flexDirection:"row",
                        justifyContent:"space-around",
                        borderRadius:18,
                        marginTop:-15
                    }}>
                        {/* hitung (a + b) x T */}
                        {/* masukan hasil dari a + b */}
                        <TextInput
                        style={{height:50, alignSelf:"center", backgroundColor:"#E4C7A1", borderRadius:20, paddingLeft:15}}
                        placeholder="masukab hasil AB"
                        keyboardType="numeric"
                        onChangeText={hasilAB}/>

                            {/* masukan nilai T */}
                        <TextInput
                        style={{height:50, alignSelf:"center", backgroundColor:"#E4C7A1", borderRadius:20, paddingLeft:15}}
                        placeholder="masukan nilai T"
                        keyboardType="numeric"
                        onChangeText={ubahT}/>
                    </View>

                    {/* hasil a + b */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10, marginTop:5}}
                    onPress={eksekusi2}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>AB x T =</Text>
                    </TouchableOpacity>

                    {/* output hasil dari ab x t */}
                    <Text
                    style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}> hasil AB x T = {returnback}</Text>

                    {/* pembugnkus dari 1/2 x hasil a dan t */}
                    <View
                        style={{
                        padding: 20,
                        width:334,
                        height:5,
                        alignSelf:"center",
                        flex:2,
                        flexDirection:"row",
                        justifyContent:"space-around",
                        borderRadius:18,
                        marginTop:5
                        }}>
                        <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold", marginBottom:-20}}>1/2 x</Text>
                        {/* hasil AB * T */}
                        <TextInput style={{width:150, height:50,  backgroundColor:"#E4C7A1", borderRadius:20, paddingLeft:10}}
                        placeholder="hasil a x t"
                        keyboardType="numeric"
                        onChangeText={ubahOutput}></TextInput>
                    </View>

                    
                    {/* hasil a + b */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10, marginTop:50}}
                    onPress={hasil}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>1/2 x ABT =</Text>
                    </TouchableOpacity>

                    {/* output hasil dari ab x t */}
                    <Text
                    style={{color:"white", left:30, fontSize:16, fontWeight:"bold", padding:18}}> hasil Luas = {luas}</Text>

                    
                    {/* ke halaman keliling */}
                    <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={() => navigation.navigate("KelilingTrapesium")}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>Hitung keliling</Text>
                    </TouchableOpacity>

                    <View style={{height:40}}></View>
                </ScrollView>
            </View>
        </SafeAreaProvider>
    );
}

export default Trapesium;