import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD5L-flRQNUuXAHOiNqUaT5q8GRByklcmk",
  authDomain: "medicalapp-051.firebaseapp.com",
  databaseURL: "https://medicalapp-051-default-rtdb.firebaseio.com",
  projectId: "medicalapp-051",
  storageBucket: "medicalapp-051.appspot.com",
  messagingSenderId: "528381581171",
  appId: "1:528381581171:web:cd18ff857838be6daad706"
};


export const app = initializeApp(firebaseConfig);