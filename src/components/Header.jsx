import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="logo">
        <h3>Mom</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"about"} className={"header-link"}>
              About
            </Link>
          </li>
          <li>
            <Link to={"docs"} className={"header-link"}>
              Docs
            </Link>
          </li>
          <li>
            <Link to={"tools"} className={"header-link"}>
              Tools
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Header;
