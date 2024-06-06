// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB08-z_PG1CQvz5n0O_3b2gEs4DwDJWF2s',
  authDomain: 'see-2080.firebaseapp.com',
  projectId: 'see-2080',
  storageBucket: 'see-2080.appspot.com',
  messagingSenderId: '394742965557',
  appId: '1:394742965557:web:868d0834daf7173ad7587c',
  measurementId: 'G-KSMKDMZXNQ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore(app);
export const auth = getAuth(app);
