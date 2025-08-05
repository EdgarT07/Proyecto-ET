// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

// --- PEGA AQUÍ TU CONFIGURACIÓN DE FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyAZhIOeOLOnqvQqcSsUWuCzXs8EdgyeaDI",
  authDomain: "tech-solution-website.firebaseapp.com",
  projectId: "tech-solution-website",
  storageBucket: "tech-solution-website.firebasestorage.app",
  messagingSenderId: "306251797244",
  appId: "1:306251797244:web:2d22e9f3918d7e76e23d79",
  measurementId: "G-5G7L7B3X4P"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


// Iniciar sesión anónimamente
signInAnonymously(auth).catch((error) => {
  console.error("Error en la autenticación anónima:", error);
});

export { db, auth };