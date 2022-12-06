import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Cards } from "./cards";

export const People = () => {
  const {store, actions} = useContext(Context)

  useEffect(()=>{
    actions.getAllElements("people")
  },[])

	return (
    <div>
      <h2>People</h2>
      <div className="container">
        <div className="row">
          {store.people.map((people,index)=>(
            <div className="col col-md-3" key={index}>
              <Cards 
                img = {`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                title = {people.name}
                text = "One people from star wars universe"
                buttonText = "Click here for more information"
                toButton
              />
            </div>
          ))}
        </div>
      </div>
    </div>
	);
};
