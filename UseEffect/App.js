import React, { useState, useEffect } from "react";

import { View, FlatList, Text } from "react-native";

import axios from "axios";

const App = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    DataStudent();
  }, [])

  const DataStudent = async () => {
    try {
      const response = await axios.get("http://192.168.212.252:5000/students");
      setStudent(response.data)
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }

  return (
    <View>
      <Text>Daftar Pengguna</Text>
      <FlatList
        data={student}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => (
          <View>
            <Text>Nama Pengguna: {item.nm_student}</Text>
            <Text>Email: {item.email_student}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default App;