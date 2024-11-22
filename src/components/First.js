import React from 'react';

function First() {
  const enrolledStudents = [
    'path-to-image1.jpg', // Replace these with actual image paths or URLs
    'path-to-image2.jpg',
    'path-to-image3.jpg',
    // Add more images as needed
  ];

  return (
    <div className="First">
      <header className="First-header">
        <div className="banner">
          <div className="text-content">
            <p className="course-type">LIVE COURSE • ART, DESIGN, ENTREPRENEURSHIP</p>
            <h1 className="program-title">Artpreneur Program</h1>
            <div className="enrollment-info">
            <div className="enrolled-students">
                {enrolledStudents.map((src, index) => (
                  <img key={index} src={src} alt={`Student ${index + 1}`} className="student-photo" />
                ))}
              </div>
              <p>+ 250 students enrolled</p>
              </div>
            <p className="program-description">
              This Deca-dimensional program is about Art, Design, Creativity, Software, Aesthetics, Teaching, Communication, Sales, Branding, and Marketing.
            </p>
            <button className="cta-button">Get in Touch</button>
          </div>
          <div className="image-content">
            <img src="/Assets/Background.png" alt="Flower Painting" className="main-banner-img" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default First;
