import React from "react";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
    return (
        <nav id="main-navbar">
            <h2 id="logo">IK</h2>
            <h2 id="nav-head">IMRAN KHAN</h2>
            
            <div id="nav-links">
                <NavLink 
                    to={"/"} 
                    className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} 
                    id="home-link"
                >
                    Home
                </NavLink>
                <NavLink 
                    to={"/about"} 
                    className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} 
                    id="about-link"
                >
                    About
                </NavLink>
                <NavLink 
                    to={"/projects"} 
                    className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} 
                    id="projects-link"
                >
                    Projects
                </NavLink>
                <NavLink 
                    to={"/contact"} 
                    className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"} 
                    id="contact-link"
                >
                    Contact
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;