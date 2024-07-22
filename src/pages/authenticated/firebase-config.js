
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDIlFxBoJQD1VTZIQtm3bwCiL5yuPZvC18",
  authDomain: "skillrevital-1b98d.firebaseapp.com",
  projectId: "skillrevital-1b98d",
  storageBucket: "skillrevital-1b98d.appspot.com",
  messagingSenderId: "873324205717",
  appId: "1:873324205717:web:394854bcee4fdb57002d9c",
  measurementId: "G-W2N0V04ZER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider();
const firebaseAuth = getAuth(app)

const signInWithGoogle = async()=>{
  try{
    const response = await signInWithPopup(firebaseAuth,googleProvider);
    const user = response.user;
    const q = query(collection(db,"user"),where("uid","==",user.uid));
    const docs = await getDocs(q);
    if(docs.docs.length === 0)
    {
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name:user.displayName,
        authProvider:"google",
        email:user.email,
      });
    }

  }catch(error){
    console.log(error.message);
    alert(error.message)
  }

}

 export {firebaseAuth,signInWithGoogle};