import react, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Balok = ({ navigation }) => {
    // V = P x L x T
    const [p, ubahP] = useState(0)
    const [l, ubahL] = useState(0)
    const [t, ubahT] = useState(0)

    const [v, ubahV] = useState(0)

    const hasilVolum = () => {
        ubahV(parseInt(p) * parseInt(l) * parseInt(t));
    }
    // akhir Volum

    // ====================================================!!!!!!!

    // L = 2 x (p.l + p.t + l.t)
    const [p2, ubahP2] = useState(0)
    const [l2, ubahL2] = useState(0)
    const [t2, ubahT2] = useState(0)

    // di kali dulu
    const [kali1, ubahKali1] = useState(0)
    const [kali2, ubahKali2] = useState(0)
    const [kali3, ubahKali3] = useState(0)

    // triger hasil kali
    const hasilKali = () => {
        ubahKali1(parseInt(p2) * parseInt(l2));
        ubahKali2(parseInt(p2) * parseInt(t2));
        ubahKali3(parseInt(l2) * parseInt(t2));
    }

    // lalu di tambah
    const [h1, ubahH1] = useState(0)
    const [h2, ubahH2] = useState(0)
    const [h3, ubahH3] = useState(0)

    const [eksekusi1, ubahEksekusi1] = useState(0)

    const tambah = () => {
        ubahEksekusi1(parseInt(h1) + parseInt(h2) + parseInt(h3));
    }
    // akhir luas

    // ====================================================!!!!!!!

    // K = 4 x ( p + l + t )
    const [p3, ubahP3] = useState(0)
    const [l3, ubahL3] = useState(0)
    const [t3, ubahT3] = useState(0)

    // melakukan eksekusi penambahan
    const [save, ubahSave] = useState(0)

    // hasil penambahan
    const tahap1 = () => {
        ubahSave(parseInt(p3) + parseInt(l3) + parseInt(t3));
    }

    // menyimpan hasil dari penambahan P + L + T
    const [dikali, ubahDikali] = useState(0)

    // untuk melakukan perkalian hasil tadi dikalikan ke angka 4
    const [silang, ubahSilang] = useState(0)

    // keliling
    const k = () => {
        ubahSilang(4 * parseInt(dikali));
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
                        width:280, 
                        height:150, 
                        backgroundColor:"#C6BBA9",
                        alignSelf:"center",
                        marginTop:10}}>
                        
                        {/* gambar */}
                        <Image source={require("./assets/balok.png")}
                        style={{alignSelf:"center", marginTop:28}}/>

                        {/* judul */}
                        <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:2}}>Balok</Text>
                    </View>

                    <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:10, marginTop:8}}>Volume : P x L x T</Text>

                    {/* Panjang */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan Panjang"
                    keyboardType="numeric"
                    onChangeText={ubahP}/>

                    {/* Lebar */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan Lebar"
                    keyboardType="numeric"
                    onChangeText={ubahL}/>

                    {/* Tinggi */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan Tinggi"
                    keyboardType="numeric"
                    onChangeText={ubahT}/>

                    {/* button hasil Voluime */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={hasilVolum}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>P x L x T =</Text>
                    </TouchableOpacity>

                    {/* hasil volum */}
                    <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:10}}>Voluime : {v}</Text>

                    {/* pembatas antara luas dan volume */}
                    <View style={{width:350, height:8, backgroundColor:"white", alignSelf:"center", marginTop:25}}></View>

                    {/* Hitung Luas Balok */}
                    <View style={{
                        width:280, 
                        height:100, 
                        backgroundColor:"#C6BBA9",
                        alignSelf:"center",
                        justifyContent:"center",
                        marginTop:18}}>

                        {/* judul */}
                        <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:2}}>Kemudian</Text>
                        <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:2}}>hitung luas balok</Text>
                    </View>

                    {/* Rumus Luas */}
                    <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:10, marginTop:8}}>Luas = 2 x (p.l + p.t + l.t)</Text>

                    {/* p2 */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan Panjang"
                    keyboardType="numeric"
                    onChangeText={ubahP2}/>

                    {/* l2 */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan Lebar"
                    keyboardType="numeric"
                    onChangeText={ubahL2}/>

                    {/* t2 */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan Tinggi"
                    keyboardType="numeric"
                    onChangeText={ubahT2}/>

                    {/* Button p.l p.t l.t */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={hasilKali}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>P x L x T =</Text>
                    </TouchableOpacity>

                    {/* hasil = p.l p.t l.t */}
                    <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:10}}>P x L : {kali1}</Text>
                    <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold"}}>P x T : {kali2}</Text>
                    <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold"}}>L x T : {kali3}</Text>

                    {/* Informasi penambahan hasil p.l, p.t, l.t */}
                    <Text style={{color:"white", fontSize:16, fontWeight:"bold",paddingTop:10, marginTop:8, alignSelf:"center"}}>Lalu jumlahkan hasil dari</Text>
                    <Text style={{color:"white", fontSize:16, fontWeight:"bold", marginTop:5, alignSelf:"center"}}>P x L, P x T, L x T</Text>
                    <Text style={{color:"white", fontSize:16, fontWeight:"bold", marginTop:5, alignSelf:"center"}}>Di sini</Text>
                    
                    {/* hasil p.l */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan hasil P x L"
                    keyboardType="numeric"
                    onChangeText={ubahH1}/>

                    {/* hasil p.t */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan hasil P x T"
                    keyboardType="numeric"
                    onChangeText={ubahH2}/>

                    {/* hasil l.t */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan hasil L x T"
                    keyboardType="numeric"
                    onChangeText={ubahH3}/>

                    {/* button hasil luas balok */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={tambah}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>Luas = </Text>
                    </TouchableOpacity>

                    {/* menunjukan hasil luas balok */}
                    <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:15}}>Luas : {eksekusi1}</Text>

                    {/* pembatas antara keliling dan luas */}
                    <View style={{width:350, height:8, backgroundColor:"white", alignSelf:"center", marginTop:25}}></View>

                    {/* Hitung Keliling Balok */}
                    <View style={{
                        width:280, 
                        height:100, 
                        backgroundColor:"#C6BBA9",
                        alignSelf:"center",
                        justifyContent:"center",
                        marginTop:18}}>

                        {/* judul */}
                        <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:2}}>Kemudian</Text>
                        <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:2}}>hitung keliling balok</Text>
                    </View>

                    {/* Rumus Luas */}
                    <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:10, marginTop:8}}>K = 4 x ( p + l + t )</Text>

                    {/* masukan P tambah */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan P"
                    keyboardType="numeric"
                    onChangeText={ubahP3}/>

                    {/* masukan L tambah */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan L"
                    keyboardType="numeric"
                    onChangeText={ubahL3}/>

                    {/* masukan T tambah */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="Masukan T"
                    keyboardType="numeric"
                    onChangeText={ubahT3}/>

                    {/* button hasil luas balok */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={tahap1}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>P + L + T </Text>
                    </TouchableOpacity>

                    {/* menunjukan hasil luas balok */}
                    <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:15}}>P + L + T : {save}</Text>

                    {/* pembungkus 4 x hasil p + l + t */}
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
                        }}>
                        <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>4 X </Text>
                        {/* hasil a x t */}
                        <TextInput style={{width:150, height:50,  backgroundColor:"#E4C7A1", borderRadius:20, paddingLeft:10}}
                        placeholder="hasil P + L + T"
                        keyboardType="numeric"
                        onChangeText={ubahDikali}></TextInput>
                    </View>

                    {/* button hasil 4 x p + l + t */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={k}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>4 x (P + L + T) </Text>
                    </TouchableOpacity>

                    {/* menunjukan hasil luas balok */}
                    <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:15}}>Keliling : {silang}</Text>

                    <View style={{height:40}}></View>
                </ScrollView>
            </View>
        </SafeAreaProvider>
    );
}

export default Balok;