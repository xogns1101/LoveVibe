import React from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Intro = ({ navigation }) => {
  console.log('rendering');
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={
        false
      } /* 이따가 스와이퍼때 한번 조정하기 */
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.pagination}
    >
      <View style={styles.slide}>
        <Image
          source={require('../assets/Logo2.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Welcome to our app!</Text>
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.image}
        />
        <Text style={styles.text}>
          Discover amazing features.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../assets/Logo2.png')}
          style={styles.image}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('TermsScreen')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            회원가입 하러가기
          </Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 24,
    color: '#000',
    position: 'absolute',
    bottom: 30,
    textAlign: 'center',
    width: '100%', // Ensure text is centered
  },
  button: {
    backgroundColor: '#FFC0CB', // 핑크 색상
    borderRadius: 30, // 타원형으로 만들기 위한 borderRadius
    paddingVertical: 10, // 버튼의 세로 여백
    paddingHorizontal: 20, // 버튼의 가로 여백
    elevation: 5, // 안드로이드에서 그림자 효과
    shadowColor: '#000', // iOS에서 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // iOS에서 그림자 오프셋
    shadowOpacity: 0.2, // iOS에서 그림자 투명도
    shadowRadius: 2.5, // iOS에서 그림자 블러 반경
    marginBottom: 30, // 버튼과 하단 사이의 여백
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF', // 텍스트 색상
    textAlign: 'center', // 텍스트 가운데 정렬
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
  },
  pagination: {
    bottom: 10,
  },
});

export default Intro;
