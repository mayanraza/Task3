import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyDUZwZnXE_p25y1XThznq6_OX4gKlqN0WU",
    authDomain: "task-3-d560f.firebaseapp.com",
    projectId: "task-3-d560f",
    storageBucket: "task-3-d560f.appspot.com",
    messagingSenderId: "183957647",
    appId: "1:183957647:web:65c59049ce2565a3b8d8fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export default app;