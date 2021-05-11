import React, {useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import '../signUp/SignUp.css'
import {useAuth} from '../../context/AuthContext'
import {Link, useHistory} from 'react-router-dom';
import SubmitButton from "../../components/submitButton/SubmitButton";


function LogIn() {
    const {handleSubmit} = useForm();
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    console.log(currentUser)

    async function onSubmit() {

        try {
            setError('')
            setLoading(true)
            const result = await login(emailRef.current.value, passwordRef.current.value)
            console.log(result)
            console.log(result.user.email)
            history.push('/')
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }

    console.log(currentUser)

    return <main>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {error && <p> {error} </p>}
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                ref={emailRef} required
                className="input"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Het emailadres moet een @ bevatten"
            />
            <input
                type="password"
                name="password"
                id="password-field"
                ref={passwordRef} required
                placeholder="Password"
                className="input"
            />

           <SubmitButton
           disabled={loading}
           buttonText="Inloggen"
           />

        </form>
        <p>Wachtwoord vergeten? <Link to="/forgot-password">Klik hier</Link>.</p>
        <p>Nog geen account? <Link to="/sign-up">Klik hier</Link>.</p>
    </main>
}

export default LogIn