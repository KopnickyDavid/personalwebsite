import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

async function InitiatFirebase() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const articles = [];

  const querySnapshot = await getDocs(collection(db, "articles"));
  querySnapshot.forEach((doc) => {
    articles.push(doc.data());
  });

  return articles;
}

async function InitiatFirebase1() {
  const articles = await InitiatFirebase(); 
  return articles; 
}

export default InitiatFirebase1;
