import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, FlatList, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MemberList = ({ navigation }) => {
    return(
        // Pembungkus
        <View style={{flex: 1}}>
          {/* tombol balik ke home */}
            <TouchableOpacity
            onPress={() => navigation.navigate("Home")}>
              <Image source={require('./assets/back.png')} style={{marginLeft:30, marginTop:50}}/>
            </TouchableOpacity>
            {/* judul */}
            <View style={{flex:1, alignItems: "center"}}>
                <Text style={{fontWeight:"bold", fontSize:26, top:50}}>Member List</Text>
            </View>
            {/* Pembungkus list member */}
            <View style={{flex: 6, flexDirection:"column"}}>

                {/* Member pertama */}
                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>

                    {/* Button 1 */}
                    <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('FhMember')}
                        style={{
                            width:257,
                            height:118,
                            backgroundColor:"white",
                            borderRadius:16,
                            elevation:20,
                            justifyContent:"center"
                        }}>
                            {/* view untuk membagi profil dan nama */}
                            <View style={{flex:2, flexDirection:"row", alignItems:"center"}}>
                                {/* image */}
                                <Image source={require('./assets/pp.png')} style={{width:74, height:74, marginLeft:20, marginRight:20}}/>
                                {/* Text */}
                                <Text style={{fontSize:18, fontWeight:"bold"}}>Fhillippo David</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Member ke dua */}
                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>

                    {/* Button 2 */}
                    <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('NmMember')}
                        style={{
                            width:257,
                            height:118,
                            backgroundColor:"white",
                            borderRadius:16,
                            elevation:20,
                            justifyContent:"center"
                        }}>
                            {/* view untuk membagi profil dan nama */}
                            <View style={{flex:2, flexDirection:"row", alignItems:"center"}}>
                                {/* image */}
                                <Image source={require('./assets/pp.png')} style={{width:74, height:74, marginLeft:20, marginRight:20}}/>
                                {/* Text */}
                                <Text style={{fontSize:18, fontWeight:"bold"}}>Nurmahera</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* Member ke tiga */}
                <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

                    {/* Button 3 */}
                    <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('ClMember')}
                        style={{
                             width:257,
                            height:118,
                            backgroundColor:"white",
                            borderRadius:16,
                            elevation:20,
                            justifyContent:"center"
                        }}>
                            <View style={{flex:2, flexDirection:"row", alignItems:"center"}}>
                                {/* image */}
                                <Image source={require('./assets/pp.png')} style={{width:74, height:74, marginLeft:20, marginRight:20}}/>
                                {/* Text */}
                                <Text style={{fontSize:18, fontWeight:"bold"}}>Clarissa Julieta</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Member ke empat */}
                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                  
                  {/* Button */}
                  <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
                      <TouchableOpacity
                      onPress={() => navigation.navigate('DvMember')}
                      style={{
                        width:257,
                        height:118,
                        backgroundColor:"white",
                        borderRadius:16,
                        elevation:20,
                        justifyContent:"center"
                      }}>
                        <View style={{flex:2, flexDirection:"row", alignItems:"center"}}>
                            {/* image */}
                            <Image source={require('./assets/pp.png')} style={{width:74, height:74, marginLeft:20, marginRight:20}}/>
                            {/* Text */}
                            <Text style={{fontSize:18, fontWeight:"bold"}}>Dave Nathanael</Text>
                        </View>
                      </TouchableOpacity>
                  </View>
                </View>
            </View>
        </View>
    );
}

export default MemberList;