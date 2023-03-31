import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/year-events" activeClassName="active">
            Year Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
