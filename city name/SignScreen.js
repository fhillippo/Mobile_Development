import React from "react";
import { TouchableOpacity, View, Text, ImageBackground, Image } from "react-native";
import { TextInput, TouchableWithoutFeedback } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
const SignScreen = ({ navigation }) => {
  return(
    <View style={{ flex: 1 }}>
    <ImageBackground source={require("./assets/in.png")} style={{ flex: 1 }} resizeMode="cover">
      <Text style={{ top: 220, left: 25, fontSize: 18 }}>Created Your Account</Text>
        <View style={{ alignItems: "center" }}>
          {/* TextInput untuk email */}
          <TextInput style={{ height: 67, marginHorizontal: 12, marginBottom:3, width: 340, padding: 10, top: 280, borderRadius: 18, backgroundColor:"white", elevation:20 }} placeholder="Enter your Email" fontSize={18}/>

          {/* Textinput untuk password */}
          <TextInput style={{ height: 67, marginHorizontal: 12, marginVertical:3, width: 340, padding: 10, top: 290, borderRadius: 18, backgroundColor:"white", elevation:20 }} placeholder="Enter your Password" secureTextEntry fontSize={18}/>

          {/* Textinput untuk password */}
          <TextInput style={{ height: 67, marginHorizontal: 12, marginVertical:3, width: 340, padding: 10, top: 300, borderRadius: 18, backgroundColor:"white", elevation:20 }} placeholder="Enter your Password" secureTextEntry fontSize={18}/>

          {/* button login, untuk menuju ke homsecreen */}
            <TouchableOpacity style={{ 
                backgroundColor: "#687EFF", 
                padding: 10, 
                top: 310,
                width: 340,
                height: 67,
                borderRadius: 18,
                alignItems:"center",
                justifyContent:"center",
                elevation: 25,
                }}
                onPress={() => navigation.navigate("Home")}>
                <Text style={{color: "white", fontSize: 18}}>Login</Text>
            </TouchableOpacity>
        
          {/* Text untuk login menggunakan sosmed lain */}
          <Text style={{top: 340, fontSize:16}}>- Or Sign Up With -</Text>
          {/* daftar sosmed */}
          <View style={{top: 360, backgroundColor:"white", width: 200, height: 80, borderRadius: 18, elevation: 18, alignItems:"center"}}>
            {/* View untuk mengatur flex nya */}
            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
              <Image source={require("./assets/ig.png")} style={{width:35, height:35}}/>
              <Image source={require("./assets/gg.png")} style={{width:35, height:35, marginLeft:22, marginRight:22}}/>
              <Image source={require("./assets/x.png")} style={{width:35, height:35}}/>
            </View>
          </View>
          {/* masuk dengan Sign Up / register */}
          <Text
          style={{top:380, fontSize: 16}}>
            Already have an account ?
            <Text onPress={() => navigation.navigate('Login')} style={{color:"blue"}}> Login</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SignScreen;
