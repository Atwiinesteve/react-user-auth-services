// importing react
import React from "react";
import { Link } from "react-router-dom";

// importing styles
import "../styles/SignIn.css";

function SignIn() {
	return (
		<div className="signin--form">
			<form>
				<div className="form--header">
					<h2>Login to Account</h2>
				</div>
				<div className="input--areas">
					<div className="input--area">
						<label htmlFor="email">Email</label>
						<input type="email" className="input-control" />
					</div>
					<div className="input--area">
						<label htmlFor="password">Password</label>
						<input type="password" className="input-control" />
					</div>
				</div>
				<div className="button--area">
					<button type="button">Signin with FaceBook</button>
					<button type="button">Signin with Google</button>
				</div>
				<div className="message">
					<p>
						No Account?, Signup please.
					</p>
				</div>
			</form>
		</div>
	);
}

export default SignIn;
