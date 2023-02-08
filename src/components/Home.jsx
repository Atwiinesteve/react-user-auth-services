// importing react modules
import React from "react";

// importing react components.
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

// app component
function Home() {
	return (
		<>
			<SignIn />
			{/* <SignUp /> */}
		</>
	);
}

// exporting component
export default Home;
