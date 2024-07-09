import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, FlatList, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const DvMember = ({ navigation }) => {
    return(
                // Pembungkus
                <View style={{flex: 1}}>

                  {/* judul */}
                  <View style={{flex:2, alignItems:"center", top:49}}>
                    <Text style={{fontSize:24, fontWeight:"bold"}}>Member List</Text>
                  </View>

                  {/* Pembungkus Identitas Member */}
                  <View style={{flex: 8, flexDirection:"column", width:326, backgroundColor:"#687EFF", alignSelf:"center", borderRadius:24, height:100, bottom:40, elevation:16}}>
      
                      {/* Foto Profile*/}
                      <View style={{flex:4, alignItems:"center", justifyContent:"center"}}>
      
                          {/* Pembungkus foto profile */}
                          <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
                            {/* Pembungkus Kedua */}
                              <View
                              onPress={() => navigation.navigate('FhMember')}
                              style={{
                                  borderRadius:16,
                                  justifyContent:"center",
                                  alignItems:"center"
                              }}>
                                      {/* image */}
                                      <Image source={require('./assets/pp.png')} style={{width:187, height:187, marginLeft:20, marginRight:20}}/>
                              </View>
                          </View>
                      </View>
      
                      {/* Pembungkus Full Name */}
                      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      
                          {/* Pembungkus ke dua */}
                          <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
                              <View
                              style={{
                                  width:270,
                                  height:42,
                                  backgroundColor:"white",
                                  borderRadius:16,
                                  justifyContent:"center"
                              }}>
                                      {/* Text */}
                                      <Text style={{fontSize:14, fontWeight:"bold", left:16}}>Full Name :    Dave Nathanael</Text>
                              </View>
                          </View>
                      </View>
                      
                      {/* Pembungkus Nick kName */}
                      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      
                          {/* Pembungkus Ke dua Nick Name */}
                          <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
                              <View
                              style={{
                                   width:270,
                                  height:42,
                                  backgroundColor:"white",
                                  borderRadius:16,
                                  justifyContent:"center"
                              }}>
                                  <View style={{flex:2, flexDirection:"row", alignItems:"center"}}>
                                      {/* Text */}
                                      <Text style={{fontSize:14, fontWeight:"bold", left:16}}>NickName :     Dave</Text>
                                  </View>
                              </View>
                          </View>
                      </View>
      
                      {/* Pembungkus BirthDay */}
                      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                        
                        {/* Button */}
                        <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
                            <View
                            style={{
                              width:270,
                              height:42,
                              backgroundColor:"white",
                              borderRadius:16,
                              justifyContent:"center"
                            }}>
                                  {/* Text */}
                                  <Text style={{fontSize:14, fontWeight:"bold", left:16}}>Birthday :     28 - 02- 07</Text>
                            </View>
                        </View>
                      </View>

                      {/* Pembungkus Age */}
                      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                        
                        {/* Button */}
                        <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
                            <View
                            style={{
                              width:270,
                              height:42,
                              backgroundColor:"white",
                              borderRadius:16,
                              justifyContent:"center"
                            }}>
                                  {/* Text */}
                                  <Text style={{fontSize:14, fontWeight:"bold", left:16}}>Age :     16 Years Old</Text>
                            </View>
                        </View>
                      </View>


                      {/* Pembungkus Gender */}
                      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                        
                        {/* Button */}
                        <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
                            <View
                            style={{
                              width:270,
                              height:42,
                              backgroundColor:"white",
                              borderRadius:16,
                              justifyContent:"center"
                            }}>
                                  {/* Text */}
                                  <Text style={{fontSize:14, fontWeight:"bold", left:16}}>Gender :     Male</Text>
                            </View>
                        </View>
                      </View>

                      {/* View kosong untuk mengakali agar semua elemen ke atas sedikit */}
                      <View style={{flex:0.3}}>
                            {/* View kosong untuk mengakali agar semua elemen ke atas sedikit */}
                      </View>
                  </View>
                   <TouchableOpacity onPress={() => navigation.navigate('Member')} style={{
                    width:326,
                    backgroundColor:"#687EFF",
                    height:45,
                    borderRadius:24,
                    alignSelf:"center",
                    bottom: 24,
                    elevation:16,
                    justifyContent:"center",
                    alignItems:"center"
                   }}>
                        <Text style={{fontSize:22, color:"white"}}>Back</Text>
                   </TouchableOpacity>
              </View>
    );
}

export default DvMember;