

import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import './authentication.styles.scss'

function Authentication (){ 
    return(
        <div className="authentication-container">
            
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;