import React from 'react';

const instructors = [
    { imageUrl: "/Assets/two - Copy.jpg", name: " Teacher", description: "Creative designer developing innovative, user-friendly interfaces." },
    { imageUrl: "/Assets/two.jpg", name: " Teacher", description: "Creative designer developing innovative solutions." },
    { imageUrl: "/Assets/three.jpg", name: " Teacher (Third Sibling)", description: "Experienced designer delivering market-leading solutions." },
    { imageUrl: "/Assets/four.png", name: " Teacher", description: "Experienced designer delivering market-leading solutions." },
];

function ThirdSibling() {
    return (
        <div className="new-app">
            
            <header className="new-header">
                <h1>Our Instructors</h1>
                <p>Meet the creative minds behind our innovative programs.</p>
            </header>
            <main className="new-content">
                {instructors.map((instructor, index) => (
                    <div className="teacher-profile" key={index}>
                        <img src={instructor.imageUrl} alt={instructor.name} />
                        <h3>{instructor.name}</h3>
                        <p>{instructor.description}</p>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default ThirdSibling;
