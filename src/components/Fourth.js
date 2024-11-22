import React from "react";

const Fourth = () => {
  const faqData = [
    {
      question: "Do I need UX/UI experience?",
      answer:
        "UX/UI experience is essential for design-specific roles. Other positions benefit from at least a basic understanding of these principles. Learning these fundamentals can enhance collaboration, improve product quality, and contribute to a more seamless user experience.",
    },
    {
      question: "What tools will I learn during the course?",
      answer:
        "You will learn industry-standard tools such as Figma, Adobe XD, and other collaboration tools. These tools are essential for wireframing, prototyping, and creating user-friendly designs.",
    },
    {
      question: "Can I join the course without prior experience?",
      answer:
        "Absolutely! Our course is designed for beginners and professionals alike. We provide foundational knowledge as well as advanced skills to help you excel in your career.",
    },
    {
      question: "What career opportunities will I have after completing the course?",
      answer:
        "Upon completing the course, you will have the skills to apply for roles such as UX Designer, UI Designer, Product Designer, and more.",
    },
    {
      question: "How much time do I need to dedicate to the course?",
      answer:
        "On average, you should expect to spend around 10–15 hours per week on course materials, assignments, and projects.",
    },
  ];

  return (
    <section className="fourth-section">
      <div className="fourth-container">
        <header className="faq-header">
          <h2>Got a question about our course?</h2>
          <p>
            Chances are at this stage you have a couple of questions. We encourage our students to ask questions directly
            and you can arrange a quick call with us anytime.
          </p>
        </header>

        <div className="faq-content">
          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <details key={index} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-content">
            <h3>Got another question?</h3>
            <p>
              If you've got another question about our Bootcamp, you can send us a message or join an intro session to
              meet our team and others.
            </p>
            <div className="contact-buttons">
              <button className="btn primary">Send message</button>
              <button className="btn secondary">Join a free intro session</button>
            </div>
          </div>
          <div className="contact-image">
            <img
              src="/Assets/FAQ Image.png" // Replace with the correct image path
              alt="Person with laptop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
