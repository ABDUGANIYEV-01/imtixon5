import React, { useState, useContext, useRef } from 'react';
import "./Login.scss";
import Elips2 from "../../img and vidyo/png/Ellipse 1.png";
import Elips1 from "../../img and vidyo/png/Ellipse 2.png";
import Bg from "../../img and vidyo/png/Group 1.png";
import { Navigate } from 'react-router-dom';
import { LoginContext } from '../../Provider/LoginProvider';

const Login = () => {
    const { token, setToken } = useContext(LoginContext);
    const emailRef = useRef()
    const passwordRef = useRef()

    if (token) {
        return <Navigate to="/" />
    }

    async function LoginFunc(event) {
        event.preventDefault()
        let body = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        let response = await fetch('https://reqres.in/api/login', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json"
            }
        })

        response = await response.json()
        if (response.token) {
            localStorage.setItem('token', JSON.stringify(response.token))
            setToken(response.token)
        } else {
            alert('error')
        }
    }

    return (
        <div className='Login'>
            <img className='BgImg1' src={Elips1} alt="" />
            <img className='BgImg2' src={Elips2} alt="" />
            <img className='BgImg3' src={Bg} alt="" />

            <div className="Info">
                <h4 className='Info__desc'>Free UI Kit</h4>
                <h1 className='Info__title'>Film & TV</h1>
            </div>

            <form onSubmit={LoginFunc} className='Login__form'>
                <input ref={emailRef} className='Login__form__input' type="email" placeholder='Login' />
                <input ref={passwordRef} className='Login__form__input' type="password" placeholder='Password' />
                <button className='Login__form__btn' type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;
