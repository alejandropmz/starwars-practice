import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [links, setLinks] = useState([
    {url:"/", text:"Home"},
    {url:"/films", text:"Films"},
    {url:"/people", text:"People"},
    {url:"/planets", text:"Planets"},
    {url:"/species", text:"Species"},
    {url:"/vehicles", text:"Vehicles"},
    {url:"/starships", text:"Starships"}
  ])

  const [menu, setMenu] = useState([
    {menu:"/loginSignup",text:"Log in / Sign up"},
    {menu:"/caroussel",text:"Interactive"},
    {menu:"/cards",text:"Data Bank"},
  ])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/"><img src="https://img.icons8.com/ios/50/000000/star-wars.png"/></Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {
              links.map((link, index)=>(
                <li key={index} className="nav-item">
                  <Link className="nav-link" to={link.url}>{link.text}</Link>
                </li>
              ))
            }

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More options
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {menu.map((menu,index)=>(
                    <li key={index}>
                      <Link className="dropdown-item" to={menu.menu}>
                        {menu.text}
                      </Link>
                    </li>
                      ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
