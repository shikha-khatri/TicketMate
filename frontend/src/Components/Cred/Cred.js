import React from 'react'
import person1 from '../Img/log.svg';
import person2 from '../Img/register.svg';

import './Cred.css';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const Cred = () => {
    // const sign_in_btn = document.querySelector("#sign-in-btn");
    // const sign_up_btn = document.querySelector("#sign-up-btn");
    // const container = document.querySelector(".container");

    // sign_up_btn.addEventListener("click", () => {
    //   container.classList.add("sign-up-mode");
    // });

    // sign_in_btn.addEventListener("click", () => {
    //   container.classList.remove("sign-up-mode");
    // });

    let navigate = useNavigate();

    const [IsSignUpMode, setIsSignUpMode] = useState(false);

    const [credentials, setcredentials] = useState({ email: "", password: "" });
    //Login
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',


            } // body data type must match "Content-Type" header
            , body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //Savig authentication token and redirecting to Home_page
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        }
        else {
            alert('invalid credentials');
        }
        window.location.reload(false);

    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    //Sign up Code

    const [scredentials, setscredentials] = useState({ name1: "", email1: "", password1: "", cpassword1: "" });

    const sign_onChange = (e) => {
        setscredentials({ ...scredentials, [e.target.name]: e.target.value })
    }

    const sign_handleSubmit = async (e) => {
        e.preventDefault();
        const { name1, email1, password1 } = scredentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json',


            } // body data type must match "Content-Type" header
            , body: JSON.stringify({ name: name1, email: email1, password: password1 })
        });
        const json = await response.json();
        console.log(json);
        //Savig authentication token and redirecting to Home_page
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/");
        } else {
            console.log("not saved");
        }
        window.location.reload(false);
    }


    return (
        <div id='Cred'>


            <div className={IsSignUpMode ? "sign-up-mode container" : "container"}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="email" id='email' onChange={onChange} name="email" value={credentials.email} placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" onChange={onChange} id='password' value={credentials.password} name='password' placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="https://www.google.com/" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.google.com/" className="social-icon">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="https://www.google.com/" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="https://www.google.com/" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form >









                        <form action="#" className="sign-up-form" onSubmit={sign_handleSubmit}>


                            <h2 className="title">Sign up</h2>




                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input id='name1' name='name1' type="text" onChange={sign_onChange} placeholder="Username" required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input id='email1' name='email1' type="email" onChange={sign_onChange} placeholder="Email" required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input id='password1' name='password1' onChange={sign_onChange} type="password" placeholder="Password" required />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" id='cpassword1' onChange={sign_onChange} name='cpassword1' placeholder="Confirm Password" required />
                            </div>







                            <input type="submit" className="btn" value="Sign up" />













                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="https://www.google.com/" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.google.com/" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.google.com/" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="https://www.google.com/" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>





















                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={() => { setIsSignUpMode(true) }}>
                                Sign up
                            </button>
                        </div>
                        <img src={person2} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={() => { setIsSignUpMode(false) }}>
                                Sign in
                            </button>
                        </div>
                        <img src={person1} className="image" alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cred


