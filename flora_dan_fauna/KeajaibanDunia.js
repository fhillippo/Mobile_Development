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
      const response = await axios.get("http://192.168.74.252:5000/dunia");
      setSerbaSerbi(response.data)
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tabel Keajaiban Dunia</Text>
      <FlatList
        data={serbaserbi}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Nama Tempat: {item.nm_dunia}</Text>
            <Text style={styles.itemText}>lokasi: {item.lokasi}</Text>
            <Text style={styles.itemText}>Tahun Dibangun: {item.tahun_dibangun}</Text>
            <Text style={styles.itemText}>pemeliharaan: {item.pemeliharaan}</Text>
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
