import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore();

export function loginWithGoogle() {
    return firebaseAuth().signInWithRedirect(googleProvider);
}

export function auth(email, pw) {
    let username = localStorage.getItem("user");
    return firebaseAuth()
        .createUserWithEmailAndPassword(email, pw)
        .then(function(newUser) {
            db.collection("users")
                .doc(newUser.user.uid)
                .set({
                    email,
                    username,
                    funds: "100000",
                    currentfunds: "100000",
                    positions: "0",
                    admin: false,
                    watchlist: [],
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
            return firebase.auth().currentUser.updateProfile({
                displayName: username,
            });
        });
}

export function logout() {
    return firebaseAuth().signOut();
}

export function login(email, pw) {
    return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
    return firebaseAuth().sendPasswordResetEmail(email);
}