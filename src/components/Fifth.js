import React, { useRef } from "react";

const Fifth = () => {
  // Store course information in an array of objects
  const courses = [
    {
      title: "Master Digital Product Design: UX Research & UI Design",
      price: "₹74,700",
      imageUrl: "/Assets/courses.jpg",
    },
    {
      title: "Master UX Design for Beginners",
      price: "₹59,500",
      imageUrl: "/Assets/courses.jpg",
    },
    {
      title: "Advanced UI/UX Design",
      price: "₹89,300",
      imageUrl: "/Assets/courses.jpg",
    },
    {
      title: "Product Design Mastery",
      price: "₹84,000",
      imageUrl: "/Assets/courses.jpg",
    },
    {
      title: "UI/UX Research for Beginners",
      price: "₹65,200",
      imageUrl: "/Assets/courses.jpg",
    },
    {
      title: "Advanced Interaction Design",
      price: "₹72,400",
      imageUrl: "/Assets/courses.jpg",
    },
  ];

  const courseCardsRef = useRef(null);

  // Scroll function to move the carousel left or right
  const scroll = (direction) => {
    if (courseCardsRef.current) {
      const container = courseCardsRef.current;
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="fifth-component">
      <h2>Accelerate your career in a UX/UI bootcamp</h2>
      <p>
        Start a new career in tech or accelerate in your existing design,
        engineering, or product role with the accountability of a live class.
      </p>
      <button className="view-courses">View all courses</button>

      <div className="course-carousel">
        {/* Left Arrow */}
        <button
          className="arroww arroww-left"
          onClick={() => scroll("left")}
        >
          &#9664;
        </button>

        {/* Scrollable Course Cards Container */}
        <div className="course-cards-container">
          <div className="course-cards" ref={courseCardsRef}>
            {courses.map((course, index) => (
              <div key={index} className="course-card">
                <img src={course.imageUrl} alt="Course" />
                <h3>{course.title}</h3>
                <p>Starting from {course.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="arroww arroww-right"
          onClick={() => scroll("right")}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Fifth;
