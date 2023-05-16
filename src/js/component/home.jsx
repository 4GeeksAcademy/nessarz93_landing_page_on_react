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
			<div className="container text-center">
				<div className="row">
					<div className="col">
					<Card />
					</div>
					<div className="col">
					<Card />
					</div>
					<div className="col">
					<Card />
					</div>
					<div className="col">
					<Card />
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
