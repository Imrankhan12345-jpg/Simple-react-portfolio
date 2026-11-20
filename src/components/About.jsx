import React from "react";
import Header from "./Header";
import "./About.css"; // CSS file import ki gayi hai

const About = () => {
    // Aap apni skills yahan asani se add ya update kar sakte hain
    const skillsList = [
        "HTML5 / CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "React Router",
        "Responsive Web Design",
        "Git & GitHub"
    ];

    return (
        <div id="about-wrapper">
            <Header />

            <div id="about-container">
                <h1 id="about-title">About Me</h1>
                <p id="about-subtitle">Get to know more about who I am, my background, and what I do.</p>

                {/* Main Content Grid */}
                <div id="about-content">
                    {/* Left Side: Bio / Introduction */}
                    <div id="about-bio-card">
                        <h3 className="about-heading">Who am I?</h3>
                        <p className="about-text">
                            Hello! I am <span className="highlight-text">Imran Khan</span>, a passionate and dedicated 
                            Web Developer based in Karachi, Pakistan. I specialize in building clean, responsive, 
                            and user-friendly websites using modern technologies like React.
                        </p>
                        <p className="about-text">
                            My journey in web development started out of a deep curiosity for how things work on the internet. 
                            Since then, I have honed my skills in frontend development, focusing on creating seamless user experiences 
                            and writing writing writeable, efficient code.
                        </p>
                    </div>

                    {/* Right Side: Skills Section */}
                    <div id="about-skills-card">
                        <h3 className="about-heading">My Skills</h3>
                        <p className="about-text">
                            Here are a few technologies and tools I’ve been working with recently:
                        </p>
                        <div id="skills-grid">
                            {skillsList.map((skill, index) => (
                                <span className="skill-tag" key={index}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Experience / Education Section */}
                <div id="experience-section">
                    <h3 className="about-heading">Experience & Education</h3>
                    <div className="timeline-item">
                        <span className="timeline-year">2024 - Present</span>
                        <h4 className="timeline-title">Frontend Web Developer (Self-Taught / Freelance)</h4>
                        <p className="timeline-desc">
                            Building custom responsive web applications, working with React components, state management, 
                            and modern CSS layouts to deliver high-quality digital experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;