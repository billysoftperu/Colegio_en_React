import firebase from "firebase";

import "firebase/firestore";

import "firebase/auth";
//archivo de configuracion de firebase de
//todas las llaves(keys) de acceso estan configuradas en un .env , que es exclusivo de uso local(no se sube a git)

/*const firebaseConfig = {
  apiKey: "AIzaSyDQXnbA5Xg3ar2J9rDB2NxEePq5FHDHUE0",
  authDomain: "iejosefa.firebaseapp.com",
  projectId: "iejosefa",
  storageBucket: "iejosefa.appspot.com",
  messagingSenderId: "756384626338",
  appId: "1:756384626338:web:a1e12d394f5cf87a3e89fb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); */



const firebaseConfig = {
  //importante: en react siempre que usemos una variable de entorno debe ir prefijada con REACT_APP 
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APP_ID,
};
//inicializo firebase
firebase.initializeApp(firebaseConfig);

//const fb = firebase.initializeApp(firebaseConfig);
//export const db = fb.firestore();

//aqui exporto mi funcionalidad de firestore para que pueda ser usada en cualquier parte de la app
export const firestore = firebase.firestore();
export default firebase;






