import React from 'react';

function Second() {
  return (
    <div className="Second-container">
      <nav className="side-menu">
        <ul>
          <li>Overview</li>
          <li>Posts</li>
          <li>Next Batches</li>
          <li>FAQ</li>
        </ul>
        <button className="contact-button">Get in Touch</button>
      </nav>
      <div className="Second-content">
        <header className="Second-header">
          <h2>Be a part of the Creative Revolution</h2>
          <p>
            The Artpreneur program offers the following essential elements – art, design, creativity, technical tools, aesthetics, business skills, branding, and teaching. 
            The course includes hands-on practice sessions, interactive discussions, live projects, brainstorming, time management, personality development, and insights.
          </p>
          <div className="skills">
            <label>Skills you will learn:</label>
            <ul>
              <li>User research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Usability testing</li>
            </ul>
          </div>
          <div className="prerequisites-container">
            <label>Prerequisites:</label>
            <p className="p">Absolutely no experience required. We start with the basics!</p>
          </div>

          <div className="prerequisites-container">
            <label>Level:</label>
            <p className="p">Beginner</p>
          </div>

        </header>
        <div className="video-content" >
          <video className="workspace-video" controls autoPlay loop>
            <source src="/Assets/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
  
    </div>
  );
}

export default Second;
