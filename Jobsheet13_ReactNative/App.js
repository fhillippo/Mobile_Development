import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity } from "react-native";

// const App = () => {
//     const [count, setCount] = useState(0);

//     return(
//         <View>
//             <Text>You Clicled {count} times</Text>
//             <TouchableOpacity onPress={() => setCount(count + 1)}>
//                 <Text>Clicl me</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
// export default App;

// const App = () => {
//     const [message, setMessage] = useState("");
//     useEffect(() => {
//         setMessage("My Name Is Gustavo");
//     }, []);
//     return(
//         <View>
//             <Text>{message}</Text>
//         </View>
//     );
// }
// export default App;

const App = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const handlePress = () => {
        setCount(prevCount => prevCount + 1);
    }
    useEffect(() => {
        setMessage(`You have clciked the first button ${count} times`);
    }, [count]);
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <TouchableOpacity onPress={handlePress}>
                <Text>Click me ({count})</Text>
            </TouchableOpacity>
            <View>
                <Text>{message}</Text>
            </View>
        </View>
    )
}
export default App;