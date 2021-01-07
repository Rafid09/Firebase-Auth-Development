import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDLp6L7jYdjgFEWn-I8Ow2bsPJwdq16-ko",
    authDomain: "fir-auth-development-15f96.firebaseapp.com",
    projectId: "fir-auth-development-15f96",
    storageBucket: "fir-auth-development-15f96.appspot.com",
    messagingSenderId: "1037284916004",
    appId: "1:1037284916004:web:3f5c5c89d0e476b82091b1",
    measurementId: "G-NX1M1TNH4X"
});

const auth = app.auth();
export { auth };
export default app;