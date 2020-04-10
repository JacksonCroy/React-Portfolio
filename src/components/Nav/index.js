import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className=" navColor navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
      <a className="navbar-brand" href="/home">
        About Me
      </a>
      <a className="navbar-brand nav" href="/gitrepos">
        Github Repos
      </a>
      <a className="navbar-brand" href="/contact">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
