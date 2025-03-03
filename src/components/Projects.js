import React, { useState } from "react";
import "../CSS/Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      "title": "Mr. Rollwala",
      "description": "Mr. Rollwala is a food café that specializes in providing unique food experiences. We assisted them in boosting their sales through effective social media marketing, business tips, promotional offers, and Google Maps management.",
      "image": "../images/Rollwala.png",
      "services": [
          "Social Media Marketing",
          "Google Maps Reviews and Ratings",
          "Offers/Promotions Creation",
          "Zomato & Swiggy Monitoring & Analysis"
      ],
      "stats": [
          { "label": "Increased Sales", "value": "30%" },
          { "label": "Social Media Followers Gained", "value": "600+" },
          { "label": "Promotions Created", "value": "50+" },
          { "label": "Google Maps Visits", "value": "350+" }
      ],
      "gallery": [
          "../images/Gal_Roll_1.jpg",
          "../images/Gal_Roll_2.jpg",
          "../images/Gal_Roll_5.jpeg",
          "../images/Gal_Roll_4.jpeg"
      ]
    },  
    {
      "title": "Spandan Dental Clinic",
      "description": "Spandan Dental Clinic is a premium dental care provider. We enhanced their online presence through strategic social media marketing, Google Maps reviews and ratings management, and the creation of educational content to engage and inform patients. Our efforts helped establish a strong digital footprint, attracting new patients and building trust within the community.",
      "image": "../images/spand_prof.png",
      "services": [
          "Social Media Marketing",
          "Google Maps Reviews and Ratings",
          "Strong Online Presence",
          "Educational Content Creation"
      ],
      "stats": [
          { "label": "New Patients Gained", "value": "100+" },
          { "label": "Social Media Followers Gained", "value": "150+" },
          { "label": "Google Maps Visits", "value": "5000+" },
          { "label": "Social Media Reach", "value": "1Lakh +" }
      ],
      "gallery": [
          "../images/Gal_Spand_8.png",
          "../images/Gal_Spand_2.png",
          "../images/Gal_Spand_4.png",
          "../images/Gal_Spand_5.png"
      ]
    },  
    {
      title: "Mr.Rollwala - SambhajiNagar",
     description: "Mr. Rollwala is a popular food café known for its delicious rolls and unique food experiences. We helped them grow by leveraging strategic social media marketing, managing Google Maps reviews and ratings, creating enticing promotional offers, and monitoring Zomato to enhance their online presence and customer engagement.",
      image: "../images/Rollwala.png",
      "services": [
        "Social Media Marketing",
        "Google Maps Reviews and Ratings",
        "Business Anlysis and Promotions Creation",
        "Zomato & Swiggy Monitoring & Analysis"
    ],
      stats: [
        { label: "Social Media Reach", value: "2Lakh +" },
        { label: "Increased Sales", value: "25%" },
        { label: "Google Maps Reviews", value: "70+" },
        { label: "Promotions Created ", value: "25+" }
      ],
      gallery: [
        "../images/Gal_Roll_S_2.jpeg",
        "../images/Gal_Roll_S_1.png",
        "../images/Gal_Roll_S_3.jpeg",
        "../images/Gal_Roll_3.jpeg",
      ],
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="section-title">Our Projects</h2>

      {/* Tabs for project navigation */}
      <div className="tabs">
        {projects.map((project, index) => (
          <motion.button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {project.title}
          </motion.button>
        ))}
      </div>

      {/* Display the active project */}
      <div className="project-content">
        {projects[activeTab] && (
          <motion.div
            className="project-section"
            key={activeTab}
          >
            <div className="project-container">
              {/* Left Section: Image and Description */}
              <div className="project-left">
                <motion.img
                  src={projects[activeTab].image}
                  alt={projects[activeTab].title}
                  className="project-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="project-description">
                  <h3 className="project-title">{projects[activeTab].title}</h3>
                  <p>{projects[activeTab].description}</p>
                </div>
              </div>

              {/* Right Section: Services */}
              <div className="project-right">
                <div className="project-services">
                  <h4 className="section-heading">Services Provided</h4>
                  <ul className="service-list">
                    {projects[activeTab].services.map((service, i) => (
                      <motion.li
                        key={i}
                        whileHover={{
                          color: "#fff",
                          backgroundColor: "#007bff",
                          padding: "15px",
                          borderRadius: "5px",
                          transition: "all 0.3s ease-in-out",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="project-stats">
              <h4 className="section-heading">Project Stats</h4>
              <div className="stats-grid">
                {projects[activeTab].stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            <div className="project-gallery">
              <h3 className="gallery-title">Our Designs & Results</h3>
              <div className="gallery-container">
                {projects[activeTab].gallery.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Gallery ${index}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
