import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import "./Login.scss"
const Login = () => {
    const { state } = useLocation()
    const returnUrl = state?.returnUrl
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        email: "",
        password:""
    })
    const navigate = useNavigate()

    const formOnSubmit = (event) => {
        event.preventDefault()

        fetch('https://reqres.in/api/login', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-type":"application/json"
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(res => {
                localStorage.setItem('token',res.token)
                if (returnUrl) {
                    navigate(`${returnUrl.pathname}${returnUrl.search}`, {
                        state: {
                            message:"Successfully logged in"
                        }
                    })
                } else {
                    navigate("/", {
                        state: {
                            message: "Successfully logged in"
                        }
                    })
                }
            })
            .catch(err => {
                setError( alert("Login yoki parolda xato"))
            })


        

        // if login successfully set token and redirect home page
        
    }

    const handleChange = (event) => {
        setForm(state => {
        return {...state, [event.target.name]:event.target.value}
        })
    }

    useEffect(() => {
        console.log(form)
    }, [form])
    return (
        <div className='register'>
            {error ? error : ""}
            <form className='logo' onSubmit={formOnSubmit}>
                
                <input type="text" name='email' onChange={ handleChange } value={form.email} className='input_logo' />
                <input type="password"  onChange={ handleChange } name="password" value={form.password} className='input_logo' />
                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
