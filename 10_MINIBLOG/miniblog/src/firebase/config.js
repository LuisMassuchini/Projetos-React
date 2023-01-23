import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1WJaBKda6xT83zsJ3UXzgqezb79cUZgo",
  authDomain: "miniblog-e696d.firebaseapp.com",
  projectId: "miniblog-e696d",
  storageBucket: "miniblog-e696d.appspot.com",
  messagingSenderId: "807347706013",
  appId: "1:807347706013:web:446718ae6356e67a8b1c74",
};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
