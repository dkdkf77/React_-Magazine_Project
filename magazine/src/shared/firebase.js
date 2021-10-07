import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB4biBrCUA0aGSTs4YLj-68hBWWu828KW0",
  authDomain: "bon-voyage-magazine.firebaseapp.com",
  projectId: "bon-voyage-magazine",
  storageBucket: "bon-voyage-magazine.appspot.com",
  messagingSenderId: "393756344105",
  appId: "1:393756344105:web:3ee58b379ad6db716a0138",
  measurementId: "G-3GK7W8PE6E"
};

firebase.initializeApp(firebaseConfig);

// 다른 파일에서 파이어 베이스 가지고 와서 쓰는 것 

const auth = firebase.auth();

export {auth};
