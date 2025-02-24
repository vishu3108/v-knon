import React from "react";
import "../CSS/Testimonials.css"; // Import the CSS file

const testimonials = [
  {
    id: 1,
    name: "Parag ",
    designation: "Mr Rollwala",
    review:
      "This service transformed our business – highly recommended! Their attention to detail and commitment to excellence are unmatched. We saw results almost immediately.",
    image: "../images/parag_testi.jpeg",
  },
  {
    id: 2,
    name: "Chetan",
    designation: "Hotel Lokhandewada",
    review:
      "Innovative, professional, and absolutely reliable. A great experience from start to finish. The team truly understands our needs and delivers above expectations.",
    image: "../images/chetan_testi.jpeg",
  },
  {
    id: 3,
    name: "Dr.Rohant Dhake",
    designation: "Spandan Dental CLinic",
    review:
      "Their expertise and commitment set them apart. The detailed strategy they provided gave us a clear roadmap for growth and success. We couldn't be happier.",
    image: "../images/Spand_testi.jpg",
  },
  {
    id: 4,
    name: "Ritesh",
    designation: "Mr Rollwala,Aurangabad",
    review:
      "Outstanding support and innovative solutions throughout our project. Their insights and hands-on approach helped us launch our product with great success.",
    image: "../images/ritesh_testi.jpeg",
  },
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
