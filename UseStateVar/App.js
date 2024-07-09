import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";

const App = () => {
  // template membuat useState const[variabel, ubah variabel]=useStat(nilaiAwal)
  const [nama, ubahNama] = useState('');
  const [hobi, ubahHobi] = useState('SIMP');
  const [umur, ubahUmur] = useState('17');
  const [kelas, ubahKelas] = useState('11');
  const [fav, ubahFav] = useState('Keju');
  return(
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <TextInput style={{borderWidth:3, borderColor:"gray", borderRadius:5}} onChangeText={ubahNama}>

      </TextInput>
      <Text style={{color:"black", fontWeight:"bold", fontSize:28}}>
        Nama saya adalah {nama}
      </Text>
      <Text style={{color:"black", fontWeight:"bold", fontSize:28}}>
        Hobi saya adalah {hobi}
      </Text>
      <Text style={{color:"black", fontWeight:"bold", fontSize:28}}>
        Umur saya adalah {umur}
      </Text>
      <Text style={{color:"black", fontWeight:"bold", fontSize:28}}>
        kelas saya adalah {kelas}
      </Text>
      <Text style={{color:"black", fontWeight:"bold", fontSize:28}}>
        Makanan fav saya adalah {fav}
      </Text>
    </View>
  );
}

export default App;