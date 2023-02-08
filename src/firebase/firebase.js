// importing firebase SDK
import { initializeApp } from "firebase/app";

// get user auth services
import {
	getAuth,
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithPopup,
} from "firebase/auth";

// firebase configurations
const firebaseConfig = {
	apiKey: "AIzaSyDyd9PUKyQM8tOXEDxo2H8KKq1JiePZmKk",
	authDomain: "react-user-auth-services.firebaseapp.com",
	projectId: "react-user-auth-services",
	storageBucket: "react-user-auth-services.appspot.com",
	messagingSenderId: "606660675751",
	appId: "1:606660675751:web:f3e0395daaf71caffcf382",
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// user auth
export const auth = getAuth(app);

// google provider
const provider = new GoogleAuthProvider();

// github provider
const githubProvider = new GithubAuthProvider()

// signin with Google
export const signInWithGoogle = () =>
	signInWithPopup(auth, provider)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error.message);
		});

// signin with GitHub
export const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            console.log(error);
        })
};