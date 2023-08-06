import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CategorizedImagesPage = () => {
  return (
    <View style={styles.container}>
      {/* Ligne supérieure */}
      <View style={styles.row}>
        {/* Première image */}
        <View style={styles.card}>
          <Image source={require('./Image1.png')} style={styles.image} />
          <Text style={styles.index}>1</Text>
        </View>

        {/* Deuxième image */}
        <View style={styles.card}>
          <Image source={require('./Image2.png')} style={styles.image} />
          <Text style={styles.index}>2</Text>
        </View>
      </View>

      {/* Ligne inférieure */}
      <View style={styles.row}>
        {/* Troisième image */}
        <View style={styles.card}>
          <Image source={require('./Image3.png')} style={styles.image} />
          <Text style={styles.index}>3</Text>
        </View>

        {/* Quatrième image */}
        <View style={styles.card}>
          <Image source={require('./Image4.png')} style={styles.image} />
          <Text style={styles.index}>4</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  index: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategorizedImagesPage;
