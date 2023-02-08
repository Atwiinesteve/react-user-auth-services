// importing react modules.
import React from "react";

import { signInWithGoogle, signInWithGithub } from "../firebase/firebase";

import "../styles/SignUp.css";

function SignUp() {
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
					<button onClick={signInWithGithub} type="button">
						Signin with GitHub
					</button>
					<button onClick={signInWithGoogle} type="button">
						Signin with Google
					</button>
				</div>
				<div className="message">
					<p>Already have an Account?, Signin please.</p>
				</div>
			</form>
		</div>
	);
}

export default SignUp;
