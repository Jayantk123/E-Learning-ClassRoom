import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJPGIpIIAYamVMVMxmiutYrikOzz0c-yQ",
    authDomain: "e-learning-classroom-a8244.firebaseapp.com",
    projectId: "e-learning-classroom-a8244",
    storageBucket: "e-learning-classroom-a8244.appspot.com",
    messagingSenderId: "249621111224",
    appId: "1:249621111224:web:be351ababf638e1e1b2f4d",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;