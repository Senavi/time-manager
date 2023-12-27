import { useState } from 'react';
import NavDefault from "./NavDefault.jsx";
import '../style/sign.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        // Retrieve users from local storage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = storedUsers.some(user => user.email === email && user.password === password);

        const supportText = document.getElementById('support-text');
        if (userExists) {
            supportText.classList.add('success');
            supportText.textContent = 'Login successful!';
            // Perform further actions here for a successful login
        } else {
            supportText.classList.add('error');
            supportText.textContent = 'Invalid email or password.';
        }
    };

    return (
        <>
            <NavDefault btn="Sign up" text="Don't have an account?" navigateTo="/signup" />
            <section className='sign'>
                <form onSubmit={handleLogin} name='login'>
                    <h1>Welcome back!</h1>
                    <label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/></label>
                    <label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
                        <a href="#">Forget password?</a>
                    </label>
                    <p id="support-text" className=''></p>
                    <button type='submit'>Login</button>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </form>
            </section>
        </>
    )
}

export default SignIn;
