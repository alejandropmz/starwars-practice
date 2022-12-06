import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Cards } from "./cards";

export const Films = () => {

  const {store, actions} = useContext(Context)
  useEffect(()=>{
    actions.getAllElements("films");
  },[])


	return (
    <div>
      <h2>Films</h2>
      <div className="container">
        <div className="row">
          {store.films.map((film,index)=>(
            <div className="col col-md-3" key={index}>
              <Cards 
                img = {`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
                title = {film.properties.title}
                text = {`Director: ${film.properties.director}`}
                altText = {`Producer: ${film.properties.producer}`}
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
