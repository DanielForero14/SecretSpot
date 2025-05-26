import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj-mRh8OfUw-Kawls6MWzQjZJXSOKJ4hw",
  authDomain: "secretspot-f3e15.firebaseapp.com",
  projectId: "secretspot-f3e15",
  storageBucket: "secretspot-f3e15.appspot.com",
  messagingSenderId: "321169410174",
  appId: "1:321169410174:web:04bf32dd92bb985c4d302f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
