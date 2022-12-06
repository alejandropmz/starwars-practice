import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Cards } from "./cards";

export const Starships = () => {
  const {store, actions} = useContext(Context)
  useEffect(()=>{
    actions.getAllElements("starships")
  },[])

	return (
    <div>
      <h2>Starships</h2>
      <div className="container">
        <div className="row">
          {store.starships.map((starship,index)=>(
            <div className="col col-md-3" key={index}>
              <Cards 
                img = {`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                title = {starship.name}
                text = "A starship from star wars universe"
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
