/* eslint-disable no-unused-vars */
import {initializeApp} from 'firebase/app';
import {getAuth , signInWithPopup, signInWithRedirect,GoogleAuthProvider,createUserWithEmailAndPassword} from'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyBSBRX_QGbu9ovDQhGlU1Li5QLB3h6cBU0",
    authDomain: "crwn-clothing-42a9b.firebaseapp.com",
    projectId: "crwn-clothing-42a9b",
    storageBucket: "crwn-clothing-42a9b.appspot.com",
    messagingSenderId: "371825147086",
    appId: "1:371825147086:web:bafe20d9205e44ec3de49f"
  };
  
  // Initialize Firebase
  // eslint-disable-next-line no-unused-vars
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt : 'select_account'
  });

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);

  export const db=getFirestore();
  export const createUserDocumentFromAuth= async(userAuth,additionalInformation={})=>{
    if(!userAuth) return;

    const userDocRef= doc(db,'users',userAuth.uid);
    const userSnapshot=await getDoc(userDocRef);
    if(!userSnapshot.exists()){
     const{displayName,email}=userAuth;
     const createdAt = new Date();
     try{
       await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
       });
     }catch(err){
      console.log(err.message)
     }
    }
    return userDocRef;
  }
 export const createAuthUserWithEmailAndPassword= async (email,password)=>{
    if(!email ||!password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
 }