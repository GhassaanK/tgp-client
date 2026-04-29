import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRhscW6Pjap3HGBVbe13NfpbJF_ItRFPk",
  authDomain: "thegrowthpartners.firebaseapp.com",
  projectId: "thegrowthpartners",
  storageBucket: "thegrowthpartners.firebasestorage.app",
  messagingSenderId: "775854026765",
  appId: "1:775854026765:web:ac7d05275a49d8f6012544"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);