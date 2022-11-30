import "./Navbar.css";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import axios from "axios";

export function Navbar() {
  return (
    <>
      <header className="nav">
        <div className="nav-title">
            <a href="/">
                <img src={Logo} alt="Logo img" style={{ width: "50px" }} />
            </a>
        </div>
        <div className="nav-links">
            <a href="/about"><i className="xi-help-o"></i></a>
            <a href="/officer"><i className="xi-user-o"></i></a>
            <a href="/join"><i className="xi-log-in"></i></a>
            <a href="/join"><i className="xi-image-o"></i></a>
        </div>
      </header>
    </>
  );
}
