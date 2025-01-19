import React, { useState } from "react";
import "../CSS/Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: "Mr. Rollwala",
      description:
        "Mr. Rollwala is a food café that specializes in providing unique food experiences. We assisted them in boosting their sales through effective social media marketing, business tips, promotional offers, and Google Maps management.",
      image: "../images/Rollwala.png",
      services: [
        "Social Media Marketing to Boost Online Presence",
        "Business Tips to Increase Operational Efficiency",
        "Creation of Engaging Promotional Offers",
        "Google Maps Creation and Management to Enhance Visibility",
      ],
      stats: [
        { label: "Increased Sales", value: "20%" },
        { label: "Social Media Followers Gained", value: "5K+" },
        { label: "Promotions Created", value: "15+" },
        { label: "Google Maps Visits", value: "500+" },
      ],
      gallery: [
        "../images/Gal_Roll_1.jpg",
        "../images/Gal_Roll_2.jpg",
        "../images/Gal_Roll_1.jpg",
        "../images/Gal_Roll_2.jpg",
      ],
    },
    {
      title: "Spandan Dental Clinic",
      description:
        "Spandan Dental Clinic is a premium dental care provider. We revamped their online presence, including designing their website, setting up online appointment booking, and running digital ad campaigns to attract new patients.",
      image: "../images/spand_prof.png",
      services: [
        "Website Design and Development",
        "Online Appointment Booking System",
        "Digital Marketing Campaigns",
        "Branding and Identity Design",
      ],
      stats: [
        { label: "Appointments Booked", value: "200+" },
        { label: "New Patients Gained", value: "50+" },
        { label: "Website Traffic Growth", value: "75%" },
        { label: "Ad Campaigns Run", value: "10+" },
      ],
      gallery: [
        "../images/Gal_Spand_1.png",
        "../images/Gal_Spand_1.png",
        "../images/Gal_Spand_1.png",
        "../images/Gal_Spand_1.png",
      ],
    },
    {
      title: "Hotel LokhandeWada",
      description:
        "Hotel LokhandeWada is a traditional family-owned restaurant. We modernized their brand, created a new menu design, and implemented customer feedback mechanisms for better service quality.",
      image: "../images/Lokhande_Prof.png",
      services: [
        "Brand Modernization",
        "Menu Design and Layout",
        "Customer Feedback Mechanisms",
        "Social Media Promotions",
      ],
      stats: [
        { label: "Customer Retention", value: "30%" },
        { label: "Social Media Engagement", value: "1K+" },
        { label: "Positive Reviews", value: "95%" },
        { label: "Menu Redesigns", value: "3" },
      ],
      gallery: [
        "../images/Gal_Lokhande_1.jpg",
        "../images/Gal_Lokhande_1.jpg",
        "../images/Gal_Lokhande_1.jpg",
        "../images/Gal_Lokhande_1.jpg",
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
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
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
              <h3 className="gallery-title">Our Designs</h3>
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
