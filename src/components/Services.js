import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaLaptopCode, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";
import "../CSS/Service.css"; // Import the CSS file

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const formRef = useRef();

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      description: "Create responsive, fast, and user-friendly websites using the latest technologies to ensure a seamless digital experience.",
      extraContent: "Optimized for performance, SEO-friendly, and designed for maximum engagement.",
      image: "/images/web_dev.png",
    },
    {
      icon: <FaChartLine />,
      title: "Instagram & Facebook Marketing",
      description: "Enhance brand visibility and drive engagement through targeted social media marketing strategies on Instagram and Facebook.",
      extraContent: "Content creation, ad campaigns, audience targeting, and analytics tracking.",
      image: "/images/facebook_insta.png",
    },
    {
      icon: <FaUsers />,
      title: "Social Media Management",
      description: "Build and maintain a strong online presence by managing social media accounts with engaging and relevant content.",
      extraContent: "Content scheduling, community engagement, and performance tracking across major platforms.",
      image: "/images/Branding.png",
    },
    {
      icon: <FaLightbulb />,
      title: "Business Growth & Consulting",
      description: "Strategic consulting to help businesses scale, optimize operations, and improve profitability with data-driven insights.",
      extraContent: "Market analysis, business strategies, and growth planning for sustainable success.",
      image: "/images/Business_Growth.png",
    },
  ];

  // Opens the modal form and sets the selected service
  const handleEnquireNow = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowForm(true);
  };

  // Closes the modal form
  const closeModal = () => {
    setShowForm(false);
  };

  // Handles form submission using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3x3ttrv",    // Replace with your EmailJS service ID
        "template_x3kbeqb",   // Replace with your EmailJS template ID
        formRef.current,
        "2cCZ1z04tFrzOaDi-"        // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Enquiry sent successfully!");
          setShowForm(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send enquiry. Please try again.");
        }
      );
  };

  return (
    <div className="services-container">
      <h2 className="section-title">Our Services</h2>
      {services.map((service, index) => (
        <div className="content-wrapper" key={index}>
          {((index === 1) || (index === 3)) && (
            <div className="illustration-wrapper">
              <img className="illustration" src={service.image} alt="Illustration" />
            </div>
          )}

          <div className={`tile-container ${index % 2 !== 0 ? "align-right" : ""}`}>
            <div className="tile">
              <div className="header-container">
                <div className="icon-container">{service.icon}</div>
                <h3 className="tile-title">{service.title}</h3>
              </div>
              <div className="content-container">
                <p className="tile-description">{service.description}</p>
                <div className="extra-content">{service.extraContent}</div>
              </div>
              <button className="enquire-button" onClick={() => handleEnquireNow(service.title)}>
                Enquire Now
              </button>
            </div>
          </div>

          {((index === 0) || (index === 2)) && (
            <div className="illustration-wrapper">
              <img className="illustration" src={service.image} alt="Illustration" />
            </div>
          )}
        </div>
      ))}

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h3>Enquire about {selectedService}</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* Hidden field for service title */}
              <input type="hidden" name="service_title" value={selectedService} />
              <div>
                <label>Name:</label>
                <input type="text" name="user_name" required />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" name="user_email" required />
              </div>
              <div>
                <label>Message:</label>
                <textarea name="message" required></textarea>
              </div>
              <button type="submit" className="enquire-button">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
