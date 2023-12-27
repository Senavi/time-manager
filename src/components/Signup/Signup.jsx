import { useState } from 'react';
import NavDefault from "../NavDefault.jsx";
import '../../style/sign.css';
import { User, users } from "../../memory/Memory.jsx";

function Signup() {
    // State for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submit
    const saveUserToLocalStorage = (user) => {
        // Retrieve the existing users from local storage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Add the new user to the array
        storedUsers.push(user);

        // Save the updated array back to local storage
        localStorage.setItem('users', JSON.stringify(storedUsers));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        const newUser = new User(name, email, password);

        // Add new user to the users array (in-memory)
        users.push(newUser);

        // Save new user to local storage
        saveUserToLocalStorage(newUser);

        const supportText = document.getElementById('support-text');
        let isRegistered = true; // You might want to add actual validation logic here

        if(isRegistered) {
            supportText.classList.add('success');
            supportText.textContent = 'You successfully registered!';
            console.log(users); // Optional: For debugging
        } else {
            supportText.classList.add('error');
            supportText.textContent = 'There were mistakes in name, email, or password.'
        }
    };

    return (
        <>
            <NavDefault btn="Sign in" text="Already have an account?" navigateTo="/signin" />
            <section className='sign'>
                <form onSubmit={handleSubmit} name='registration'>
                    <h1>Who are you?</h1>
                    <label>
                        <input id='username' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name & Surname' required/>
                    </label>
                    <label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
                    </label>
                    <label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Create your password' required/>
                    </label>
                    <p id="support-text" className=''></p>
                    <button type='submit'>Register</button>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </form>
            </section>
        </>
    );
}

export default Signup;
