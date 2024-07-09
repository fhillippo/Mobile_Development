import react, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

const Persegi = ({ navigation }) => {
    // UseState nya
    // luas : sisi x sisi
    const [Sisi1, ubahSisi1] = useState(0)
    const [Sisi2, ubahSisi2] = useState(0)

    // keliling : s + s + s + s
    const [S1, ubahS1] = useState(0)
    const [S2, ubahS2] = useState(0)
    const [S3, ubahS3] = useState(0)
    const [S4, ubahS4] = useState(0)
    
    // luas dan keliling
    const [luas, ubahLuas] = useState(0)
    const [keliling, ubahKeliling] = useState(0)

    // hasil
    const hasil = () => {
        ubahLuas(parseInt(Sisi1) * parseInt(Sisi2));
        ubahKeliling(parseInt(S1) + parseInt(S2) + parseInt(S3) + parseInt(S4));
    }
    return(
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
                    <Image source={require("./assets/persegi.png")}
                    style={{alignSelf:"center", width:120, height:120, marginTop:-2}}/>

                    {/* judul */}
                    <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:-10}}>Persegi</Text>
                </TouchableOpacity>

                {/* Luas : sisi x sisi */}
                {/* judul */}
                <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Luas : sisi x sisi</Text>

                {/* sisi 1 */}
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
                placeholder="Sisi 1"
                onChangeText={ubahSisi1}></TextInput>

                {/* sisi 2 */}
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10,}}
                placeholder="Sisi 2"
                onChangeText={ubahSisi2}></TextInput>
                {/* Luas : sisi x sisi */}

                {/* Keliling : s + s + s + s */}
                {/* judul */}
                <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Keliling : s + s + s + s</Text>

                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10,}}
                placeholder="Sisi 1"
                onChangeText={ubahS1}></TextInput>
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10,}}
                placeholder="Sisi 2"
                onChangeText={ubahS2}></TextInput>
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10,}}
                placeholder="Sisi 3"
                onChangeText={ubahS3}></TextInput>
                <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10,}}
                placeholder="Sisi 4"
                onChangeText={ubahS4}></TextInput>

                <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Luas = {luas}</Text>
                <Text style={{color:"white", marginTop:10, left:30, fontSize:16, fontWeight:"bold"}}>Keliling = {keliling}</Text>
        </View>
    );
}

export default Persegi;