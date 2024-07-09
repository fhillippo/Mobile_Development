import react, {useState, useTransition} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const KelilingTrapesium = ({ navigation }) => {
    // keliling trapesium = AB + BC + CD + DA
    // jumlahkan semua keliling nya
    const [a, ubahA] = useState(0)
    const [b, ubahB] = useState(0)
    const [c, ubahC] = useState(0)
    const [d, ubahD] = useState(0)

    // hasil A + B
    const [hasilab, hasilAB] = useState(0)
    // hasil B + C
    const [hasilbc, hasilBC] = useState(0)
    // hasil C + D
    const [hasilcd, hasilCD] = useState(0)
    // hasil D + A
    const [hasilda, hasilDA] = useState(0)

    // eksekusi semua penjumlahan tadi di atas
    const Ab = () => {
        hasilAB(parseInt(a) + parseInt(b));
    }

    const Bc = () => {
        hasilBC(parseInt(b) + parseInt(c));
    }

    const Cd = () => {
        hasilCD(parseInt(c) + parseInt(d));
    }

    const Da = () => {
        hasilDA(parseInt(d) + parseInt(a));
    }
    // eksekusi semua penjumlahan tadi di atas
    
    // hasil dari nilai A, B, C, D tadi dimasukan ke sini
    const [ab, AB] = useState(0)
    const [bc, BC] = useState(0)
    const [cd, CD] = useState(0)
    const [da, DA] = useState(0)

    // lalu jumlahkan
    const [answer, ubahAnswer] = useState(0)
    const [answer2, ubahAnswer2] = useState(0)

    // kemudian eksekusi lagi
    const trun1 = () => {
        ubahAnswer(parseInt(ab) + parseInt(bc));
    }

    const turn2 = () => {
        ubahAnswer2(parseInt(cd) + parseInt(da));
    }
    
    // hasil jawaban dari AB + BC = .....; CD + DA = .....;
    // di junlahkan lagi ke sini
    const [jawab, ubahJawab] = useState(0)
    const [jawab2, ubahJawab2] = useState(0)

    // untuk variabel jawaban keliling trapesium
    const [keliling, ubahKeliling] = useState(0)

    // lalu eksekusi terakhir
    const eksekusi = () => {
        ubahKeliling(parseInt(jawab) + parseInt(jawab2))
    }
    return(
        <SafeAreaProvider>
            <View style={{flex:1, backgroundColor:"#6E6659"}}>
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

                    {/* rumus keliling trapesium */}
                    <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Keliling : AB + BC + CD + DA</Text>

                    {/* masuk nilai A */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan nilai A"
                    keyboardType="numeric"
                    onChangeText={ubahA}/>

                    {/* masuk nilai B */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan nilai B"
                    keyboardType="numeric"
                    onChangeText={ubahB}/>

                    {/* masuk nilai C */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan nilai C"
                    keyboardType="numeric"
                    onChangeText={ubahC}/>

                    {/* masuk nilai D */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan nilai D"
                    keyboardType="numeric"
                    onChangeText={ubahD}/>

                    {/* A + B */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={Ab}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>A + B =</Text>
                    </TouchableOpacity>
                    {/* jawaban nya */}
                    <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>A + B = {hasilab}</Text>

                    {/* B + C */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:10, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={Bc}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>B + C =</Text>
                    </TouchableOpacity>
                    {/* jawaban nya */}
                    <Text style={{color:"white", marginTop:8, left:30, fontSize:16, fontWeight:"bold"}}>B + C = {hasilbc}</Text>

                    {/* C + D */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={Cd}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>C + D =</Text>
                    </TouchableOpacity>
                    {/* jawaban nya */}
                    <Text style={{color:"white", marginTop:8, left:30, fontSize:16, fontWeight:"bold"}}>C + D = {hasilcd}</Text>

                    {/* D + A */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={Da}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>D + A =</Text>
                    </TouchableOpacity>
                    {/* jawaban nya */}
                    <Text style={{color:"white", marginTop:8, left:30, fontSize:16, fontWeight:"bold"}}>D + A = {hasilda}</Text>

                    {/* mark!! */}
                    <Text style={{color:"white", marginTop:8, alignSelf:"center", fontSize:20, fontWeight:"bold"}}>Kemudian Jumlahkan</Text>
                    <Text style={{color:"white", marginTop:2, alignSelf:"center", fontSize:20, fontWeight:"bold"}}>AB + BC + CD + DA</Text>

                    {/* masuk nilai AB */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan hasil A + B"
                    keyboardType="numeric"
                    onChangeText={AB}/>

                    {/* masuk nilai BC */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan hasil B + C"
                    keyboardType="numeric"
                    onChangeText={BC}/>

                    {/* masuk nilai CD */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan hasil C + D"
                    keyboardType="numeric"
                    onChangeText={CD}/>

                    {/* masuk nilai DA */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan hasil D + A"
                    keyboardType="numeric"
                    onChangeText={DA}/>

                    {/* AB + BC */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={trun1}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>AB + BC =</Text>
                    </TouchableOpacity>
                    {/* jawaban nya */}
                    <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>AB + BC = {answer}</Text>

                    {/* CD + DA */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={turn2}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>CD + DA =</Text>
                    </TouchableOpacity>
                    {/* jawaban nya */}
                    <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>CD + DA = {answer2}</Text>
                    
                    {/* mark!! */}
                    <Text style={{color:"white", marginTop:8, alignSelf:"center", fontSize:20, fontWeight:"bold"}}>Kemudian Hitung</Text>
                    <Text style={{color:"white", marginTop:2, alignSelf:"center", fontSize:20, fontWeight:"bold"}}>Keliling nya</Text>

                    {/* masuk nilai AB + BC = */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan hasil AB + BC"
                    keyboardType="numeric"
                    onChangeText={ubahJawab}/>

                    {/* masuk nilai CD + DA */}
                    <TextInput
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
                    placeholder="masukan hasil CD + DA"
                    keyboardType="numeric"
                    onChangeText={ubahJawab2}/>

                    {/* AB + BC */}
                    <TouchableOpacity
                    style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
                    onPress={eksekusi}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>Keliling = =</Text>
                    </TouchableOpacity>
                    {/* jawaban nya */}
                    <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Keliling = {keliling}</Text>

                    {/* ke halaman keliling */}
                    <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10, marginTop:15}}
                    onPress={() => navigation.navigate("Trapesium")}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>Hitung luas</Text>
                    </TouchableOpacity>

                    <View style={{height:40}}></View>
                </ScrollView>
            </View>
        </SafeAreaProvider>
    );
}

export default KelilingTrapesium;