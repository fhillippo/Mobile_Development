import react, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, Image, ScrollView } from "react-native";

const Tabung = ({ navigation }) => {

    //volume
    const [angka1, ubahAngka1] = useState('0')
    const [angka2, ubahAngka2] = useState('0')
    const [hasil, ubahHasil] = useState('0')

    const fungsiKali = () => {
        ubahHasil(3.14 * angka1 * angka1 * angka2)
    }
    //luas permukaan
    const [angka4, ubahAngka4] = useState('6')
    const [angka5, ubahAngka5] = useState('0')
    const [hasil1, ubahHasil1] = useState('0')

    const fungsiTambah = () => {
        ubahHasil1(2 * 3.14 * angka4 * (angka4 + angka5))
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:"#6E6659" }} >
            <ScrollView>

            {/* banner */}
                <View style={{
                    width:350, 
                    height:150, 
                    backgroundColor:"#C6BBA9",
                    alignSelf:"center",
                    marginTop:70}}>
                        
                    {/* gambar */}
                    <Image source={require("./assets/tabung.png")}
                    style={{alignSelf:"center", marginTop:15}}/>

                    {/* judul */}
                    <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:10}}>Tabung</Text>
                </View>

                <View style={{justifyContent: "center", alignItems: "center", backgroundColor: 'white', width: 350, borderRadius: 20, borderWidth: 2, height:400, marginTop:20, backgroundColor:'#E4C7A1' }}>
                    <Text style={{ fontSize: 25, color:'white', fontWeight:"bold" }}>Volume Tabung</Text>
                    <Text style={{ fontSize: 20, marginBottom: 5, color:'white', fontWeight:"bold" }}>3,14 x r x r x t</Text>

                    <TextInput style={{ width: 160, borderWidth: 3, borderColor: '#6E6659', borderRadius: 10, textAlign: "center", color: 'black' }} onChangeText={ubahAngka1} placeholder="Jari-Jari"></TextInput>

                    <TextInput style={{ width: 160, borderWidth: 3, borderColor: '#6E6659', marginTop: 10, borderRadius: 10, textAlign: "center" }} onChangeText={ubahAngka2} placeholder="Tinggi"></TextInput>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ backgroundColor: '#6E6659', padding: 10, borderRadius: 10, textAlign: 'center', fontSize: 15, textAlign: "left", marginTop: 10 }} onPress={fungsiKali}><Text style={{ color: 'white', }}>Hasil</Text></TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 25, textAlign: 'right', width: 100 }}>{hasil}</Text>
                    </View>
                </View>


                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: 'white', width: 350, borderRadius: 20, borderWidth: 2, height:400, marginTop:30, backgroundColor:'#E4C7A1' }}>
                    <Text style={{ fontSize: 25, marginBottom: 5, color:"white", fontWeight:'bold' }}>Luas Permukaan Tabung</Text>
                    <Text style={{ fontSize: 20, marginBottom: 5, color:"white", fontWeight:'bold' }}>2 x 3,14 x r x (r + t)</Text>

                    <TextInput style={{ width: 160, borderWidth: 3, borderColor: '#6E6659', borderRadius: 10, textAlign: "center", color: 'black' }} onChangeText={ubahAngka4} placeholder="Jari Jari"></TextInput>

                    <TextInput style={{ width: 160, borderWidth: 3, borderColor: '#6E6659', marginTop: 10, borderRadius: 10, textAlign: "center" }} onChangeText={ubahAngka5} placeholder="Sisi"></TextInput>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ backgroundColor: '#6E6659', padding: 10, borderRadius: 10, textAlign: 'center', fontSize: 15, textAlign: "left", marginTop: 10 }} onPress={fungsiTambah}><Text style={{ color: 'white', }}>Hasil</Text></TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 25, textAlign: 'right', width: 100 }}>{hasil1}</Text>
                    </View>
                </View>

                <TouchableOpacity style={{width:330, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10, marginTop:20}}
                    onPress={() => navigation.navigate("BangunRuang")}>
                        <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>Kembali</Text>
                </TouchableOpacity>

                <View style={{height:40}}></View>
            </ScrollView>
        </View>

    );
};

export default Tabung;