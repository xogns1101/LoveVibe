import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  // 여기에 Firebase 설정 정보를 입력하세요
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const login = async (email, password) => {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw error;
  }
};
