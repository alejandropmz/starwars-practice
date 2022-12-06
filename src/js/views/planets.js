import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Cards } from "./cards";

export const Planets = () => {

  const {store, actions} = useContext(Context); //llamámos al usecontext para poder usar las acciones del getAllElements
  
  useEffect(()=>{
    actions.getAllElements("planets")
  },[])
  
    return (
      <div className="general-container">
        <h2>Planets</h2>
        <div className="container">
          <div className="row">
            {store.planets.map((planet, index)=>(
              <div key={index} className="col col-md-3">
                <Cards 
                  img = {`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  title = {planet.name}
                  text = "A planet of the Star Wars universe"
                  buttonText = "Click here for more info"
                  toButton = "/*"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
	);
};
