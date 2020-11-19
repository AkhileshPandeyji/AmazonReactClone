import React from 'react';
import { Link } from 'react-router-dom';
import amazonLogoImg from '../images/amazonLoginLogo.png';

const SignUp = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    const handleClick = (e)=>{
        e.preventDefault();
    }

    return (
        <div className="sign-up">
            <div className="sign-up-logo">
                <img src={amazonLogoImg} alt="" />
            </div>
            <div className="sign-up-container">
                <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <div className="sign-up-name">
                        <label htmlFor="">Your name</label>
                    </div>
                    <div className="sign-up-input">
                        <input type="text" name="name" />
                    </div>
                    <div className="sign-up-contact">
                        <label htmlFor="">Mobile number</label>
                    </div>
                    <div className="sign-up-input">
                        <input type="text" name="contact" />
                    </div>
                    <div className="sign-up-email">
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="sign-up-input">
                        <input type="email" name="email" />
                    </div>
                    <div className="sign-up-password">
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="sign-up-input">
                        <input type="email" name="email" />
                    </div>
                    <div className="sign-up-pass-para">
                        <p> Passwords must be at least 6 characters</p>
                    </div>
                    <div className="sign-up-desc">
                        <p>
                            We will send you a text to verify your phone.
                            Message and Data rates may apply.
                    </p>
                    </div>
                    <div className="sign-up-submit">
                        <button onClick={handleClick}>Continue</button>
                    </div>
                </form>
                <div className="sign-up-login">
                    <p>Already have an Account</p>
                    <Link to="/login">Sign In</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;