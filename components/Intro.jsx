// Intro.jsx
import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet } from 'react-native';

const Intro = () => {
  console.log('rendering');
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Intro;
