
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyASvG_yXqifC8iACLL2kkD9BvVO6mC2AZg",
  authDomain: "olx-clone-3b8b2.firebaseapp.com",
  projectId: "olx-clone-3b8b2",
  storageBucket: "olx-clone-3b8b2.appspot.com",
  messagingSenderId: "201137147296",
  appId: "1:201137147296:web:45d399aa88be667e65e8c5"
};

const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)

export const googleProvider = new GoogleAuthProvider()