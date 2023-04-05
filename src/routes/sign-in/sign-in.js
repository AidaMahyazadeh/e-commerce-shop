/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {auth, signInWithGooglePopup ,createUserDocumentFromAuth,signInWithGoogleRedirect} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

function SignIn (){
    // useEffect(() => {
    //     (async () => {
    //       const response = await getRedirectResult(auth);
    //       if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //       }
    //     })();
    //   }, []);
    
   async function logGoogleUser(){
     const {user} = await signInWithGooglePopup();
     const userDocRef=await createUserDocumentFromAuth(user);
    }
    
    return(
        <div>
            <h1> sign in page</h1>
            <button onClick={logGoogleUser}> 
                sign in with google popup
            </button>
            {/* <button onClick={signInWithGoogleRedirect}> 
                sign in with google redirect
            </button> */}
            <SignUpForm />
        </div>
    )
}

export default SignIn;