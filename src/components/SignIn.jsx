import NavDefault from "./NavDefault.jsx";
import '../style/sign.css';

function SignIn() {
    return (
        <>
            <NavDefault />
            <section className='sign'>
                <form action="#" name='login' method='post'>
                    <h1>Welcome back!</h1>
                    <label><input type="email" id='email' placeholder='Email' required/></label>
                    <label><input type="password" id='password' placeholder='Password' required/>
                        <a href="#">Forget password?</a>
                    </label>
                    <button type='submit'>Login</button>
                </form>
            </section>
        </>
    )
}

export default SignIn
