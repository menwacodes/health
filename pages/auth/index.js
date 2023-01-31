import {signIn} from "next-auth/react";
import {useRouter} from "next/router";
import {useRef, useState} from "react";

function Login() {
    const [loginError, setLoginError] = useState('')
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const router = useRouter();

    const onSubmitHandler = e => {
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        signIn("credentials", {
            enteredEmail, enteredPassword, callbackUrl: `${window.location.origin}/`, redirect: false
        }).then(function(result) {
            if (result.error !== null) {
                if (result.status === 401) {
                    setLoginError("Bad Credentials, try again")
                } else {
                    setLoginError(result.error)
                }
            }
            else {
                router.push(result.url)
            }
        })
    };
    return (
        <form onSubmit={onSubmitHandler}>
            {loginError}
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id={"email"} required ref={emailInputRef}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id={"password"} required ref={passwordInputRef}/>
            </div>
            <button type={"submit"}>Login</button>
        </form>
    );
}

export default Login;