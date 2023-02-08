// importing react
import React from 'react';

// importing styles
import '../styles/SignIn.css';

function SignIn() {
  return (
    <div className="sign--form">
        <form>
            <div className="form--header">
                <h2>Login to Account</h2>
            </div>
            <div className="input--areas">
                <div className="input--area">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className="input-control" />
                </div>
                <div className="input--area">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="input-control" />
                </div>
                <div className="input--area">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="input-control" />
                </div>
                <div className="input--area">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="input-control" />
                </div>
            </div>
            <div className="button--area">
                <button type="button">Login</button>
            </div>
        </form>
    </div>
  )
}

export default SignIn