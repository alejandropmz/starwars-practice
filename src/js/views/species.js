import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Cards } from "./cards";

export const Species = () => {

  const {store, actions} = useContext(Context)
  useEffect(()=>{
    actions.getAllElements("species")
  },[])
	return (
    <div>
      <h2>Species</h2>
      <div className="container">
        <div className="row">
          {store.species.map((specie,index)=>(
            <div className="col col-md-3" key={index}>
              <Cards 
                img = {`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
                title = {specie.name}
                text = "A specie from star wars universe"
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
