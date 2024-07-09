import React, {Component} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StackActions } from "@react-navigation/native";

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace("Home"))
        }, 3000)
    }

    render() {
        return(
            <View style={{flex:1, backgroundColor:"#E4C7A1", justifyContent:"center", alignItems:'center'}}>
                <Image
                source={require("./assets/logo.png")}
                style={{width:200, height:200}}/>
            </View>
        );
    }
    
}

export default Splash;