import react, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

const KelilingSegitiga = ({ navigation }) => {
    // hitung keliling segitiga
    const [a, ubahA] = useState(0)
    const [b, ubahB] = useState(0)
    const [c, ubahC] = useState(0)

    // deklarasi jumlah nya
    const [keliling, ubahKeliling] = useState(0)

    // hasilnnyal
    const hasil = () => {
        ubahKeliling(parseInt(a) + parseInt(b) + parseInt(c))
    }
    return(
        <View style={{flex:1, backgroundColor:"#6E6659"}}>
            {/* banner */}
            <View style={{
                width:280, 
                height:150, 
                backgroundColor:"#C6BBA9",
                alignSelf:"center",
                marginTop:70}}>
                    
                {/* gambar */}
                <Image source={require("./assets/segitiga.png")}
                style={{alignSelf:"center", marginTop:15}}/>

                {/* judul */}
                <Text style={{fontSize:18, alignSelf:'center', fontWeight:'bold', marginTop:10}}>Segitiga</Text>
            </View>

            {/* Keliling : A + B + C */}
            {/* judul */}
            <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Keliling = A + B + C</Text>

            {/* sisi A */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:10, borderRadius:20, paddingLeft:10}}
            placeholder="Sisi A"
            keyboardType="numeric"
            onChangeText={ubahA}></TextInput>

            {/* sisi B */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10,}}
            placeholder="Sisi B"
            keyboardType="numeric"
            onChangeText={ubahB}></TextInput>

            {/* sisi C */}
            <TextInput style={{width:220, height:50, alignSelf:"center", backgroundColor:"#E4C7A1", marginTop:15, borderRadius:20, paddingLeft:10,}}
            placeholder="Sisi C"
            keyboardType="numeric"
            onChangeText={ubahC}></TextInput>

            <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", marginTop:30}}
            onPress={hasil}>
                <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>K =</Text>
            </TouchableOpacity>

            {/* Hasil keliling */}
            <Text style={{color:"white", marginTop:17, left:30, fontSize:16, fontWeight:"bold"}}>Keliling : {keliling}</Text>

            {/* back button */}
            <TouchableOpacity style={{width:220, height:50, alignSelf:"center", backgroundColor:"#C6BBA9", borderRadius:20, paddingLeft:10, justifyContent:"center", marginTop:30}}
            onPress={() => navigation.navigate("Segitiga")}>
                <Text style={{alignSelf:"center", fontSize:17, fontWeight:"bold"}}>Hitung luas</Text>
            </TouchableOpacity>
        </View>
    );
}

export default KelilingSegitiga;