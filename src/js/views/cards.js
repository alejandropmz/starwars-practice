import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Cards = (props) => {

  /*
  img
  title
  text
  buttonText
  toButton
  */
  return (
<div className="card">
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <p className="card-text">{props.altText}</p>
    <Link to={props.toButton} className="btn btn-primary">{props.buttonText}</Link>
  </div>
</div>
  );
};
