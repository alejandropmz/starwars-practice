import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cards } from "./cards";

export const Vehicles = props => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getAllElements("vehicles")
	},[])
	return (
		<div>
			<h1>Vehicles</h1>
			<div className="container">
				<div className="row">
					{store.vehicles.map((vehicle,index)=>(
						<div className="col col-md-3">
							<Cards 
							img = {`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
							title = {vehicle.name}
							text = "A vehicle from star wars universe"
							buttonText = "Click here for more information"
							toButton = "*"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
