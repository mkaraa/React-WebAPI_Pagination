import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

// MARK: Header function to show header of the web page 
function Header() {
    return (
        <div className="divHeaderContainer">
            <Link to="/" >
                <img src={require("../asset/databoss.png")} className="dataBossIcon" alt="Databoss" />
            </Link>
            <Link to="/" >
                <button className="headerButtons">
                    <h1>Home</h1>
                </button>
            </Link>
            <Link to="/series">
                <button className="headerButtons">
                    <h1>Series</h1>
                </button>
            </Link>
            <Link to="/movies">
                <button className="headerButtons">
                    <h1>Movies</h1>
                </button>
            </Link>
            <div className="authButtonContainer">
                <button className="btn first" ><p>LOGIN</p></button>
                <button className="btn first" ><p>SIGN UP</p></button>
            </div>
        </div>
    );
}

export default Header;