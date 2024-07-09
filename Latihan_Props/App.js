import React from "react";

// mengiport atau memanggil component latihan props dari file LatihanProp.js
import { ScrollView } from "react-native";
// import { Latihan } from "./LatihanProps.js";
// import { MySelf } from "./Latihan2.js";
import { Idle1, Idle2, Idle3 } from "./Latihan3.js";
// Membuat sebuah properti "nama" dengan nilai "Ronia"

const App = () => {
    return(
        // <Latihan name = "Fhillippo David"/>
//         <MySelf name = "Nama : Fhillippo David"/>
        <ScrollView>
            <Idle1 nama="Kyoto" lokasi="Japanese"/>
            <Idle2/>
            <Idle3/>
        </ScrollView>
    );
}

export default App;