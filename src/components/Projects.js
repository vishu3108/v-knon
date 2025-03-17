import React, { useState, useEffect, useMemo } from "react";
import "../CSS/Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ✅ Project Data with useMemo (Optimized)
  const projects = useMemo(() => [
    {
      title: "Mr. Rollwala",
      description: "Mr. Rollwala is a food café that specializes in providing unique food experiences. We assisted them in boosting their sales through effective social media marketing, business tips, promotional offers, and Google Maps management.",
      image: "/images/Rollwala.png",
      services: [
        "Social Media Marketing",
        "Google Maps Reviews and Ratings",
        "Offers/Promotions Creation",
        "Zomato & Swiggy Monitoring & Analysis",
      ],
      stats: [
        { label: "Increased Sales", value: "30%" },
        { label: "Social Media Followers Gained", value: "600+" },
        { label: "Promotions Created", value: "50+" },
        { label: "Google Maps Visits", value: "350+" },
      ],
      gallery: [
        "/images/Gal_Roll_1.jpg",
        "/images/Gal_Roll_2.jpg",
        "/images/Gal_Roll_5.jpeg",
        "/images/Gal_Roll_4.jpeg",
      ],
    },
    {
      title: "Spandan Dental Clinic",
      description: "Spandan Dental Clinic is a premium dental care provider. We enhanced their online presence through strategic social media marketing, Google Maps reviews and ratings management, and the creation of educational content to engage and inform patients.",
      image: "/images/spand_prof.png",
      services: [
        "Social Media Marketing",
        "Google Maps Reviews and Ratings",
        "Strong Online Presence",
        "Educational Content Creation",
      ],
      stats: [
        { label: "New Patients Gained", value: "100+" },
        { label: "Social Media Followers Gained", value: "150+" },
        { label: "Google Maps Visits", value: "5000+" },
        { label: "Social Media Reach", value: "1 Lakh +" },
      ],
      gallery: [
        "/images/Gal_Spand_8.png",
        "/images/Gal_Spand_2.png",
        "/images/Gal_Spand_4.png",
        "/images/Gal_Spand_5.png",
      ],
    },
    {
      title: "Mr.Rollwala - SambhajiNagar",
      description: "Mr. Rollwala is a popular food café known for its delicious rolls and unique food experiences. We helped them grow by leveraging strategic social media marketing, managing Google Maps reviews and ratings, creating enticing promotional offers, and monitoring Zomato.",
      image: "/images/Rollwala.png",
      services: [
        "Social Media Marketing",
        "Google Maps Reviews and Ratings",
        "Business Analysis and Promotions Creation",
        "Zomato & Swiggy Monitoring & Analysis",
      ],
      stats: [
        { label: "Social Media Reach", value: "2 Lakh +" },
        { label: "Increased Sales", value: "25%" },
        { label: "Google Maps Reviews", value: "70+" },
        { label: "Promotions Created ", value: "25+" },
      ],
      gallery: [
        "/images/Gal_Roll_S_2.jpeg",
        "/images/Gal_Roll_S_1.png",
        "/images/Gal_Roll_S_3.jpeg",
        "/images/Gal_Roll_3.jpeg",
      ],
    },
  ], []);

  // ✅ Resize for Mobile/Desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Auto-slide gallery
  useEffect(() => {
    if (!projects[activeTab].gallery) return;

    const interval = setInterval(() => {
      setGalleryIndex((prevIndex) => (prevIndex + 1) % projects[activeTab].gallery.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTab, projects]);

  return (
    <div className="projects-section">
      <h2 className="section-title">Our Projects</h2>

      {/* Tabs for Desktop and Dropdown for Mobile */}
      {!isMobile ? (
        <div className="tabs">
          {projects.map((project, index) => (
            <motion.button
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => { setActiveTab(index); setGalleryIndex(0); }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {project.title}
            </motion.button>
          ))}
        </div>
      ) : (
        <select
          className="project-dropdown"
          value={activeTab}
          onChange={(e) => { setActiveTab(parseInt(e.target.value)); setGalleryIndex(0); }}
        >
          {projects.map((project, index) => (
            <option key={index} value={index}>
              {project.title}
            </option>
          ))}
        </select>
      )}

      {/* Active Project Section */}
      <div className="project-content">
        {projects[activeTab] && (
          <motion.div className="project-section" key={activeTab}>

            <div className="project-container">
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

              <div className="project-right">
                <h4 className="section-heading">Services Provided</h4>
                <ul className="service-list">
                  {projects[activeTab].services.map((service, i) => (
                    <motion.li key={i} whileHover={{ scale: 1.05 }}>
                      {service}
                    </motion.li>
                  ))}
                </ul>
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

              {!isMobile ? (
                // Desktop: Show 3 images per slide
                <div className="gallery-container">
                  {[0, 1, 2].map((offset) => {
                    const imgIndex = (galleryIndex + offset) % projects[activeTab].gallery.length;
                    return (
                      <motion.img
                        key={imgIndex}
                        src={projects[activeTab].gallery[imgIndex]}
                        alt={`Gallery ${imgIndex}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    );
                  })}
                </div>
              ) : (
                // Mobile: Single image slide
                <motion.img
                  src={projects[activeTab].gallery[galleryIndex]}
                  alt="Gallery"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>

          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
