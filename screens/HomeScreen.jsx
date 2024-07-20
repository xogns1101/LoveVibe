import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Love Vibe</Text>

      <Button
        title='Go to Profilei'
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title='Go to Matches'
        onPress={() => navigation.navigate('Match')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 60,
  },
});

export default HomeScreen;
