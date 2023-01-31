import {useRouter} from "next/router.js";
import {useRef} from "react";
import classes from "./auth-form.module.css";
import {signIn} from "next-auth/react";

function AuthForm() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const router = useRouter()

    // submit handler
    async function submitHandler(event) {
        event.preventDefault();

        // get values from form
        const userEmail = emailInputRef.current.value;
        const userPw = passwordInputRef.current.value;

        // log user in
        const signInOptions = {
            redirect: false,
            email: userEmail,
            password: userPw
        }

        const result = await signIn('credentials', signInOptions)
        console.log(result)

        // redirect after login
        if (!result.error) {
            router.replace("/")
        }
    }

    return (
        <section className={classes.auth}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id={"email"} required ref={emailInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id={"password"} required ref={passwordInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Login</button>
                </div>
            </form>
        </section>
    )
}

export default AuthForm;