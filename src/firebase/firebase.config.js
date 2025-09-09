import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDG5WFfAfuD_EjHMxxVprtJ6Dz6dvqYMyw",
  authDomain: "house-48b55.firebaseapp.com",
  projectId: "house-48b55",
  storageBucket: "house-48b55.firebasestorage.app",
  messagingSenderId: "118580147922",
  appId: "1:118580147922:web:67e1c94fb1522d8529df0b",
  measurementId: "G-N4RTS3JG64"
};
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
