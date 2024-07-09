import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

const Squares = () => {
  const [limit, setLimit] = useState('');
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const generateSquares = () => {
      const squaresArray = [];
      for (let i = 1; i <= parseInt(limit); i++) {
        squaresArray.push(i * i);
      }
      setSquares(squaresArray);
    };

    if (limit !== '' && !isNaN(parseInt(limit))) {
      generateSquares();
    } else {
      setSquares([]);
    }
  }, [limit]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ marginBottom: 10, padding: 5, borderWidth: 1 }}
        placeholder="Masukkan nilai"
        value={limit}
        onChangeText={text => setLimit(text)}
        keyboardType="numeric"
      />
      <Text>Bilangan Kuadrat:</Text>
      {squares.map((square, index) => (
        <Text key={index}>{square}</Text>
      ))}
    </View>
  );
};

export default Squares;
