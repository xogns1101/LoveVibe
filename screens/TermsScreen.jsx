import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

const TermsScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAgree = () => {
    if (!isChecked) {
      Alert.alert(
        'Error',
        'Please agree to the terms and conditions',
      );
      return;
    }

    // 동의 후 다음 페이지로 이동
    navigation.navigate('SignUp'); // 'SignUp'이 올바른 스크린 이름인지 확인
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Love Vibe에 처음 오신 것을 {'\n'}환영합니다!
      </Text>
      <Text>
        서비스 이용을 위해 아래 내용에 동의해주세요.
      </Text>
      <View style={styles.checkBoxContainer}>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setIsChecked(!isChecked)}
          color={isChecked ? '#007BFF' : undefined} // 체크박스 색상 설정
          style={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>
          본인은 만 14세 이상이며, Love Vibe 서비스
          이용약관,{'\n'}
          개인정보 수집 및 이용, 위치기반 서비스 이용약관,
          {'\n'}
          광고성 알림수진(선택), 개인정보 마케팅 및 광고
          활용(선택){'\n'}에 모두 동의합니다.
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.termsText}>
          {/* 여기에 약관 내용을 입력합니다 */}
          <Checkbox
            status={isChecked ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked(!isChecked)}
            color={isChecked ? '#007BFF' : undefined} // 체크박스 색상 설정
            style={styles.checkbox}
          />
          (필수) 만 14세 이상입니다.
          {'\n'} 서비스를 이용하기 위해서는 만 14세 이상이
          되어야 합니다. 만 14세 이하의 이용자의 경우 서비스
          이용이 제한 됩니다.{'\n'}
          (필수) 서비스 이용 약관에 동의합니다.
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleAgree}
        style={[
          styles.button,
          isChecked
            ? styles.buttonEnabled
            : styles.buttonDisabled,
        ]}
        disabled={!isChecked}
      >
        <Text style={styles.buttonText}>
          동의하고 진행하기
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  content: {
    marginBottom: 20,
    borderWidth: 2, // 보더의 두께
    borderColor: 'black', // 보더의 색상
    borderRadius: 10, // 보더의 둥근 모서리 (옵션)
    padding: 10,
    margin: 5,
  },
  termsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    fontSize: 'bold',
  },
  buttonEnabled: {
    backgroundColor: '#fadfd6',
  },
  buttonDisabled: {
    backgroundColor: '#B0B0B0',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default TermsScreen;
