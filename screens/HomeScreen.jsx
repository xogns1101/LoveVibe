import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { StyleSheet } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const HomeScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome to the Home Screen!
        </Text>
      </View>

      <Appbar
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom,
            backgroundColor: theme.colors.elevation.level2,
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        <Appbar.Action icon='archive' onPress={() => {}} />
        <Appbar.Action icon='email' onPress={() => {}} />
        <Appbar.Action icon='label' onPress={() => {}} />
        <Appbar.Action icon='delete' onPress={() => {}} />
        <FAB
          mode='flat'
          size='medium'
          icon='plus'
          onPress={() => {}}
          style={[
            styles.fab,
            {
              top:
                (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) /
                2,
            },
          ]}
        />
      </Appbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fadfd6',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
