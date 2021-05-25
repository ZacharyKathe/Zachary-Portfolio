import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/work"
          className={location.pathname === "/work" ? "nav-link active" : "nav-link"}
        >
          Work
        </Link>
      </li>
      <li>
      <a className="nav-link active : nav-link" href="https://www.linkedin.com/in/zachary-kathe-621415189/">LinkedIn</a>
      </li>
      <li>
      <a className="nav-link active : nav-link" href="https://github.com/ZacharyKathe">GitHub</a>
      </li>
    
    </ul>
    
    
  );
}

export default NavTabs;
