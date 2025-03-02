import React from "react";
import "../CSS/Testimonials.css"; // Import the CSS file

const testimonials = [
  {
    id: 1,
    name: "Mr. Parag",
    designation: "Mr Rollwala",
    review: (
      <>
        We've been collaborating with <strong>V-Knon</strong> since our opening. They have consistently delivered <strong>outstanding results</strong> for Mr. Rollwala. They stay up to date with social media trends like <strong>memes</strong> and <strong>reels</strong>, which helps <strong>attract</strong> and <strong>engage</strong> our audience effectively.
      </>
    ),
    image: "../images/parag_testi.jpeg"
  },
  {
    id: 2,
    name: "Mr. Chetan",
    designation: "Hotel Lokhandewada",
    review: (
      <>
        One of <strong>V-Knon's greatest strengths</strong> is their <strong>deep understanding</strong> of the local audience. Their <strong>unique approach</strong> and strategic insights consistently deliver <strong>outstanding results</strong>, making them a <strong>trusted partner</strong> for our business.
      </>
    ),
    image: "../images/chetan_testi.jpeg"
  },
  {
    id: 3,
    name: "Dr. Rohant Dhake",
    designation: "Spandan Dental Clinic",
    review: (
      <>
        What sets <strong>V-Knon</strong> apart is their <strong>unwavering commitment</strong>—they treat our business as their own. Their <strong>deep expertise</strong>, thorough understanding of our needs, and <strong>strategic approach</strong> ensure <strong>exceptional results</strong> every time.
      </>
    ),
    image: "../images/Spand_testi.jpg"
  },
  {
    id: 4,
    name: "Mr. Ritesh",
    designation: "Mr Rollwala, Aurangabad",
    review: (
      <>
        We have worked with <strong>V-Knon</strong> for almost <strong>two years</strong>, and they truly understand the <strong>restaurant business</strong>. Their <strong>creative designs</strong> and <strong>marketing strategies</strong> attract and engage customers effectively.
      </>
    ),
    image: "../images/ritesh_testi.jpeg"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="testimonial-photo"
            />
            <h3 className="testimonial-name">{item.name}</h3>
            <p className="testimonial-designation">{item.designation}</p>
            <p className="testimonial-review">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
