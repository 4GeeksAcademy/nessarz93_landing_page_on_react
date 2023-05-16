import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar/>
			<Jumbotron/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Footer/>
		</div>
	);
};

export default Home;
