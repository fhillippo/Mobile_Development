import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import axios from "axios";

const Flora = ({ navigation }) => {
  const [serbaserbi, setSerbaSerbi] = useState([]);

  useEffect(() => {
    DataSerbaSerbi();
  }, [])

  const DataSerbaSerbi = async () => {
    try {
      const response = await axios.get("http://192.168.74.252:5000/flora");
      setSerbaSerbi(response.data)
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tabel Flora</Text>
      <FlatList
        data={serbaserbi}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Nama Tumbuhan: {item.nm_tumbuhan}</Text>
            <Text style={styles.itemText}>Jenis: {item.jenis}</Text>
            <Text style={styles.itemText}>Asal: {item.asal}</Text>
            <Text style={styles.itemText}>Lingkungan hidup: {item.lingkungan_hidup}</Text>
            <Text style={styles.itemText}>Negara: {item.negara}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    elevation:12,
  },
  itemText: {
    fontSize: 16,
  },
});

export default Flora;
