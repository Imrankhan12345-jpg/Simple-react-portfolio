import React from "react";
import Header from "./Header";
import "./Home.css"; // CSS file import ki gayi hai
import profilePic from "../assets/Photo2.jpeg";

const Home = () => {
    return (
        <div id="home-wrapper">
            <Header />
            
            <div id="hero-section">
                {/* Left Side: Name aur About */}
                <div id="hero-text">
                    <h1 id="hero-name">Imran Khan</h1>
                    <p id="hero-about">
                        Hi, I'm a passionate Web Developer specializing in building modern, 
                        responsive, and user-friendly websites and web applications. 
                        I love turning creative ideas into clean and efficient code.
                    </p>
                </div>

                {/* Right Side: Circular Image */}
                <div id="hero-image-container">
                   <img src={profilePic} alt="Imran Khan" id="profile-photo" />
                </div>
            </div>
        </div>
    );
};

export default Home;