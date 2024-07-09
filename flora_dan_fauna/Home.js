import React, {useSate} from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
    return(
        <View style={{ flex:1, backgroundColor:"gray", justifyContent:"center", alignItems:"center" }}>
            <View>
                <TouchableOpacity style={{width:280, borderWidth:4, borderColor:"white", height:80, backgroundColor:"lightblue", marginBottom:40, borderRadius:20, justifyContent:"center", alignItems:"center"}}
                onPress={() => navigation.navigate("Flora")}>
                    <Text style={{fontWeight:"bold", fontSize:20}}>Flora</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:280, borderWidth:4, borderColor:"white", height:80, backgroundColor:"lightblue", borderRadius:20, justifyContent:"center", alignItems:"center"}}
                onPress={() => navigation.navigate("Fauna")}>
                    <Text style={{fontWeight:"bold", fontSize:20}}>Fauna</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:280, borderWidth:4, borderColor:"white", height:80, backgroundColor:"lightblue", marginTop:40, borderRadius:20, justifyContent:"center", alignItems:"center"}}
                onPress={() => navigation.navigate("KeajaibanDunia")}>
                    <Text style={{fontWeight:"bold", fontSize:20}}>Keajaiban Dunia</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;