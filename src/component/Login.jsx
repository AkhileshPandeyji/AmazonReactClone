import React, { useState } from 'react';
import amazonLoginLogo from '../images/amazonLoginLogo.png'
import TwoButton from './TwoButton';
import { Link } from "react-router-dom";

const Login = () => {

    let [identity, changeIdentity] = useState({ email: "", pw: "" })
    let [swap, toggleSwap] = useState({ sw: true });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        if (name === "email") {
            changeIdentity({ email: value, pw: "" });
        }
        if (name === "pw") {
            changeIdentity({ email: identity.email, pw: value });
        }
    }

    const handleClick = (e) => {
        toggleSwap({ sw: !swap.sw });
    }

    const loginAction = (e) => {
        e.preventDefault();
        console.log(identity);
    }

    return (
        <div className="login">
            <div className="login-logo">
                <img src={amazonLoginLogo} />
            </div>
            <div className="login-container">
                <h1>Login</h1>
                <div className="login-form-container">
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="email-label-container">
                            {
                                swap.sw
                                    ? <label for="email">Email or mobile phone number</label>
                                    : <label for="password">Password</label>

                            }
                        </div>
                        <div className="email-input-container">
                            {
                                swap.sw
                                    ? <input type="email||text" name="email" id="email" onChange={handleChange} value={identity.email} required />
                                    : <input type="password" name="pw" id="password" onChange={handleChange} value={identity.pw} required />

                            }
                        </div>
                        {
                            swap.sw
                                ? <button className="login-submit" onClick={handleClick}>Next</button>
                                : <TwoButton handleClick={handleClick} loginAction={loginAction} />
                        }
                        <div className="login-form-terms">
                            <p>By continuing, you agree to Amazon's <a>Conditions of Use</a> and <a>Privacy Notice </a>. </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="login-signup">
                <hr />
                <p>New to Amazon?</p>
                <hr />
            </div>
            <div className="final-submit">
                <Link to="/signUp">
                <button className="login-submit gray">Create Your Amazon Account</button>
                </Link>
            </div>            
        </div>
    );
}

export default Login;