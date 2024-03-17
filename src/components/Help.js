// Help.js

import React, { useContext } from 'react';
import './Help.css'; // Import your CSS file for styling
import { ContextApp } from '../utils/Context';

const Help = () => {
    const { isDarkMode } = useContext(ContextApp);
    const containerStyle = {
        backgroundColor: isDarkMode ? "#131528" : "rgba(255, 255, 255, 0.9)",
        color: isDarkMode ? "#ccc" : "#000",
        height: '100vh',
        overflow: 'auto',
        maxWidth: '100%'
    };

    const borderStyle = {
        height: '800px',
        width: '80%'
    };

    return (
        <div className="markdown-container w-full" style={containerStyle}>
            <h1 className="heading">Chat Application</h1>
            <p className="description">
                Welcome to our chat application! This README file will guide you through the usage of the application, including its features, prompts, and how to customize the theme to your preference.
            </p>

            <h2>Features</h2>
            <ul className="feature-list">
                <li>Real-time chat functionality</li>
                <li>Left navigation panel for easy navigation</li>
                <li>Dark and light themes for customization (toggleable?)</li>
                <li>Help section with prompt examples</li>
            </ul>

            <h2>Usage</h2>
            <p className="description">This chat application can be used for various purposes, including:</p>
            <ul className="usage-list">
                <li>Querying financial data of companies</li>
                <li>Visualizing query results in chart form</li>
                <li>Analyzing trends and patterns in financial reports</li>
            </ul>


            <h2>Screenshots</h2>
            <ul className="usage-list">
                <li>Querying financial data of companies</li>
                <img src="/login.png" alt="Chat Application" style={borderStyle} />
                <li>Querying financial data of companies</li>
                <img src="/appInterface.png" alt="Chat Application" style={borderStyle} />
                <li>Visualizing query results in chart form</li>
                <img src="/navDetails.png" alt="Chat Application" style={borderStyle} />
                <li>Analyzing trends and patterns in financial reports</li>
                <img src="/queryResponse.png" alt="Chat Application" style={borderStyle} />
                <li>Analyzing trends and patterns in financial reports</li>
                <img src="/visualData.png" alt="Chat Application" style={borderStyle} />
            </ul>

            <h2>Feedback</h2>
            <p className="description">
                We're eager to hear from you! Share your thoughts, ideas, or even your favorite chatbot experiences with us.
            </p>

            <p className="closing">Happy chatting!</p>

            <h2>Contact Details</h2>
            <ul className="contact-list">
                <li>Email: motiramshinde944@gmail.com</li>
                <li>Contact No: 8975303848</li>
            </ul>
        </div>
    );
};

export default Help;
