import React, {useState} from "react-native";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

const App = () => {
  const [angka1, ubahAngka1] = useState(0)
  const [angka2, ubahAngka2] = useState(0)
  const [angka3, ubahAngka3] = useState(0)
  const [jumlah, ubahJumlah] = useState(0)
  const [selisih, ubahSelisih] = useState(0)
  const hasil = () => {
    ubahJumlah(parseInt(angka1) * parseInt(angka2) * parseInt(angka3));
    ubahSelisih(parseInt(angka1) + parseInt(angka2) + parseInt(angka3));
  }
  return(
    <View>
      <TextInput
      style={{width:180, height:40, borderRadius:20, borderWidth:2, elevation:15, alignSelf:"center", backgroundColor:"pink", marginTop:180}}
      onChangeText={ubahAngka1}></TextInput>
      <TextInput
      style={{width:180, height:40, borderRadius:20, borderWidth:2, elevation:15, alignSelf:"center", backgroundColor:"pink", marginTop:20}}
      onChangeText={ubahAngka2}></TextInput>
      <TextInput
      style={{width:180, height:40, borderRadius:20, borderWidth:2, elevation:15, alignSelf:"center", backgroundColor:"pink", marginTop:20}}
      onChangeText={ubahAngka3}></TextInput>

      <TouchableOpacity
      onPress={hasil}
      style={{width:180, height:65, backgroundColor:"lightblue", alignSelf:"center", alignItems:"center", justifyContent:"center", marginTop:50, borderRadius:20}}>
      <Text style={{fontSize:22, fontWeight:"bold", color:"white"}}>Press</Text>
      </TouchableOpacity>

      <Text style={{fontSize:22, fontWeight:"bold", alignSelf:"center", marginTop:50}}>Jumlah = {jumlah}</Text>
      <Text style={{fontSize:22, fontWeight:"bold", alignSelf:"center"}}>Selisih = {selisih}</Text>
    </View>
  );
}

export default App;