import React from "react";
import Header from "./Header";
import "./Project.css"; // CSS file import ki gayi hai

const Projects = () => {
    // Aap yahan apne projects ka data asani se add ya change kar sakte hain
    const projectsList = [
        {
            id: 1,
            title: "API Integration",
            description: "Data fetching and dynamic display using modern JS.",
            techStack: ["HTML", "CSS", "JavaScript","API"],
            liveLink: "https://imrankhan12345-jpg.github.io/Api-integration/",
            githubLink: "https://github.com/Imrankhan12345-jpg/Api-integration"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing web development projects, skills, and contact information with a modern dark theme.",
            techStack: ["HTML", "CSS","JavaScript"],
            liveLink: "https://imrankhan12345-jpg.github.io/portfolio/",
            githubLink: "https://github.com/Imrankhan12345-jpg/portfolio"
        },
        {
            id: 3,
            title: "SignUp Page with Firebase",
            description: "Secure authentication system integrated with Firebase.",
            techStack: ["HTML", "CSS","JavaScript","Firebase","Popup"],
            liveLink: "https://imrankhan12345-jpg.github.io/signup-page-with-firebase/",
            githubLink: "https://github.com/Imrankhan12345-jpg/signup-page-with-firebase"
        },
        {
            id: 4,
            title: "User Management Todo List",
            description: "Task management system with advanced controls.",
            techStack: ["HTML", "CSS","JavaScript"],
            liveLink: "https://imrankhan12345-jpg.github.io/User-management-todo-list/",
            githubLink: "https://github.com/Imrankhan12345-jpg/User-management-todo-list"
        },
        {
            id: 5,
            title: "Car Gallery Page",
            description: "Showcase gallery designed with clean CSS layouts.",
            techStack: ["HTML", "CSS","JavaScript"],
            liveLink: "https://imrankhan12345-jpg.github.io/Car-gallery-image/",
            githubLink: "https://github.com/Imrankhan12345-jpg/Car-gallery-image"
        },
        {
            id: 6,
            title: "Quiz Page",
            description: "Interactive web quiz application with score tracking.",
            techStack: ["HTML", "CSS","JavaScript"],
            liveLink: "https://imrankhan12345-jpg.github.io/Quiz-page/",
            githubLink: "https://github.com/Imrankhan12345-jpg/Quiz-page"
        },
        {
            id: 7,
            title: "Advanced Calculator",
            description: "Calculator supporting both mouse clicks and keyboard entry.",
            techStack: ["HTML", "CSS","JavaScript","Bootstrap"],
            liveLink: "https://github.com/Imrankhan12345-jpg/Calculator-also-can-select-keyboard-number",
            githubLink: "https://imrankhan12345-jpg.github.io/Calculator-also-can-select-keyboard-number/"
        },
        {
            id: 8,
            title: "Stop Watch",
            description: "Precise timer application with lap functionalities.",
            techStack: ["HTML", "CSS","JavaScript"],
            liveLink: "https://imrankhan12345-jpg.github.io/Stop-watch/",
            githubLink: "https://github.com/Imrankhan12345-jpg/Stop-watch"
        },
        {
            id: 9,
            title: "Signup Page",
            description: "Clean and responsive UI registration form.",
            techStack: ["HTML", "CSS","JavaScript"],
            liveLink: "https://imrankhan12345-jpg.github.io/Signup-page/",
            githubLink: "https://github.com/Imrankhan12345-jpg/Signup-page"
        },
        {
            id: 10,
            title: "Image Gallery",
            description: "Dynamic responsive photo layout grid.",
            techStack: ["HTML", "CSS","JavaScript"],
            liveLink: "https://imrankhan12345-jpg.github.io/Gallery-image/",
            githubLink: "https://github.com/Imrankhan12345-jpg/Gallery-image"
        },
        {
            id: 11,
            title: "Cricket Cards Series",
            description: "Sports series showcase cards layout.",
            techStack: ["HTML", "CSS","JavaScript"],
            liveLink: "https://imrankhan12345-jpg.github.io/Cricket-cards-series/",
            githubLink: "https://github.com/Imrankhan12345-jpg/Cricket-cards-series"
        },
    ];

    return (
        <div id="projects-wrapper">
            <Header />
            
            <div id="projects-container">
                <h1 id="projects-title">My Projects</h1>
                <p id="projects-subtitle">Here are some of the web development projects I've worked on recently.</p>

                {/* Projects Grid */}
                <div id="projects-grid">
                    {projectsList.map((project) => (
                        <div className="project-card" key={project.id}>
                            <h3 className="project-card-title">{project.title}</h3>
                            <p className="project-card-desc">{project.description}</p>
                            
                            {/* Tech Stack Badges */}
                            <div className="tech-stack">
                                {project.techStack.map((tech, index) => (
                                    <span className="tech-badge" key={index}>{tech}</span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="project-links">
                                <a href={project.liveLink} className="project-btn live-btn" target="_blank" rel="noreferrer">Live Demo</a>
                                <a href={project.githubLink} className="project-btn github-btn" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;