import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Films } from "./views/films";
import { People } from "./views/people";
import { Planets } from "./views/planets";
import { Species } from "./views/species";
import { Starships } from "./views/starships";
import { Vehicles } from "./views/vehicles";
import { LoginSignup } from "./views/loginSignup";
import { Caroussel } from "./views/caroussel";
import { Cards } from "./views/cards";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/films" element={<Films />} />
						<Route path="/people" element={<People />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/species" element={<Species />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/loginSignup" element={<LoginSignup />} />
						<Route path="/caroussel" element={<Caroussel />} />
						<Route path="/cards" element={<Cards />} />
						<Route path="*" element={<h1>Page in progress!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
