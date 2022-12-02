import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Caroussel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://lumiere-a.akamaihd.net/v1/images/image_997c081c.jpeg?region=0%2C0%2C1536%2C864&width=768" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://lumiere-a.akamaihd.net/v1/images/star-wars-jedi-fallen-order-respawn-battlegrid-inquisit_cbdc1e70.jpeg?region=0%2C0%2C1280%2C720&width=960" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://lumiere-a.akamaihd.net/v1/images/5f89c7a76abe2a0001e13df7-image_c15dc0ab.jpeg?region=0%2C0%2C1536%2C864&width=768" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
