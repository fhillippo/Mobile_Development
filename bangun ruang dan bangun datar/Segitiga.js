import react, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

const Segitiga = ({ navigation }) => {
    //  L = 1/2 x a x t
    // hitung a x t nya dulu
    const [a, ubahA] = useState(0)
    const [t, ubahT] = useState(0)

    // kemudian hitung 1/2 x hasil a x t
    const [balik, ubahBalik] = useState(0)

    // luas
    const [hasil1, ubahHasil1] = useState(0)
    const [luas, ubahLuas] = useState(0)

    // hasil luas
    const hasil = () => {
        ubahHasil1(parseInt(a) * parseInt(t));
    }

    const result = () => {
        ubahLuas(1/2 * parseInt(balik))
    }
    return(
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
                <Image source={require("./assets/segitiga.png")}
                style={{alignSelf:"center", marginTop:15}}/>

                {/* judul */}
                <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:10}}>Segitiga</Text>
            </View>

            {/* Luas : 1/2 x a (alas) x t (tinggi) */}
            {/* judul */}
            <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Luas : 1/2 x a (alas) x t (tinggi)</Text>

            {/* Alas */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
            placeholder="a (alas)"
            keyboardType="numeric"
            onChangeText={ubahA}></TextInput>

            {/* Tinggi */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10}}
            placeholder="t (tinggi)"
            keyboardType="numeric"
            onChangeText={ubahT}></TextInput>

            {/* Press button a x t */}
            <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginTop:15, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
            onPress={hasil}>
                <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>a x t =</Text>
            </TouchableOpacity>
            
            {/* hasil a x t */}
            <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>hasil dari a x t : {hasil1}</Text>
            
            {/* pembugnkus dari 1/2 x hasil a dan t */}
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
                <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>1/2 X </Text>
                {/* hasil a x t */}
                <TextInput style={{width:150, height:50,  backgroundColor:"#E4C7A1", borderRadius:20, paddingLeft:10}}
                placeholder="hasil a x t"
                keyboardType="numeric"
                onChangeText={ubahBalik}></TextInput>
            </View>

            {/* hasil dari 1/2 x hasil a x t */}
            {/* Press button a x t */}
            <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", marginBottom:10, borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10}}
            onPress={result}>
                <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>L =</Text>
            </TouchableOpacity>
            
            <Text style={{color:"white", left:30, fontSize:16, fontWeight:"bold",paddingTop:10, marginBottom:42}}>Luas : {luas}</Text>

            {/* ke halaman keliling */}
            <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", elevation:10, marginBottom:40}}
            onPress={() => navigation.navigate("KelilingSegitiga")}>
                    <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>Hitung keliling</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Segitiga;