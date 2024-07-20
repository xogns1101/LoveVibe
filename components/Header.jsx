import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ title, onMenuPress }) => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/Logo2.png')} // 로컬 이미지를 불러옵니다
        style={styles.image}
      />
      <TouchableOpacity
        onPress={onMenuPress}
        style={styles.menuButton}
      >
        <Text>
          <Ionicons name='menu' size={30} color='pink' />{' '}
          {/* 햄버거 아이콘 추가 */}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 'auto',
    paddingTop: 20,
    // backgroundColor: '#f7287b',
    // alignItems: 'center',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 200, // 이미지를 원하는 너비로 설정합니다
    height: 120, // 이미지를 원하는 높이로 설정합니다
    marginTop: 40, // 이미지 아래에 마진을 줍니다
  },
  menuButton: {
    margin: 40, // 이미지 아래에 마진을 줍니다
    paddingTop: 40,
  },
});

export default Header;
