import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) =>{
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          {Array(props.pages).fill("").map((value,index)=>(
            <li className="page-item" key={index}>
              <Link className="page-link" to={`/?${props.type}=${page+1}`}>${page+1}</Link>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    )
}