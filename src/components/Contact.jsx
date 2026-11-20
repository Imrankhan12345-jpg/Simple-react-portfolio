import React, { useState } from "react";
import Header from "./Header";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState(""); // Loading, Success, ya Error dikhane ke liye

    // Input fields mein typing handle karne ke liye
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Form submit karne par Web3Forms API par data bhejne ke liye
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        // Web3Forms ke liye data tayyar karna
        const payload = {
            ...formData,
            access_key: "45989f5f-bcb7-41e4-bc97-2563d8a3d31a"
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                // Form fields ko reset karne ke liye
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
                // 5 seconds baad message hatane ke liye
                setTimeout(() => setStatus(""), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    return (
        <div id="contact-wrapper">
            <Header />

            <div id="contact-container">
                <h1 id="contact-title">Get In Touch</h1>
                <p id="contact-subtitle">
                    Have a project in mind or want to collaborate? Feel free to send me a message!
                </p>

                <div id="contact-content">
                    {/* Left Side: Direct Contact Info */}
                    <div id="contact-info">
                        <h3 className="info-heading">Contact Information</h3>
                        <p className="info-text">
                            I am available for freelance work and full-time web development opportunities.
                        </p>
                        
                        <div className="info-item">
                            <span className="info-label">Email:</span>
                            <span className="info-value">imrankhan.dev@example.com</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Location:</span>
                            <span className="info-value">Karachi, Pakistan</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Availability:</span>
                            <span className="info-value">Open to Work</span>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <form id="contact-form" onSubmit={handleSubmit}>
                        {status === "success" && (
                            <div id="success-message">
                                Thank you! Your message has been sent to my email.
                            </div>
                        )}

                        {status === "error" && (
                            <div style={{ color: "#f87171", marginBottom: "15px", textAlign: "center" }}>
                                Something went wrong. Please try again later.
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Project inquiry / Collaboration"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" id="submit-btn" disabled={status === "Sending..."}>
                            {status === "Sending..." ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;