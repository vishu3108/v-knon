import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, 
    FaChartLine, 
    FaLightbulb, 
    FaUsers, 
    FaInstagram, 
    FaFacebook, 
    FaGoogle, 
    FaYoutube, 
    FaChartBar, 
    FaLaptopCode, 
    FaEnvelopeOpenText, 
    FaMobileAlt } from "react-icons/fa";
import "../CSS/Service.css";

const ServicesPage = () => {
    const services = [
        {
          icon: <FaBullhorn />,
          title: "Digital Marketing",
          description: "Boost your online presence with innovative strategies.",
        },
        {
          icon: <FaChartLine />,
          title: "SEO Optimization",
          description: "Improve search engine rankings and drive organic traffic.",
        },
        {
          icon: <FaLightbulb />,
          title: "Creative Branding",
          description: "Build a strong and unique brand identity.",
        },
        {
          icon: <FaUsers />,
          title: "Social Media Management",
          description: "Engage audiences and grow your followers.",
        },
        {
          icon: <FaInstagram />,
          title: "Instagram Ads",
          description: "Run targeted campaigns to captivate your audience on Instagram.",
        },
        {
          icon: <FaFacebook />,
          title: "Facebook Ads",
          description: "Optimize ads to reach the right demographics on Facebook.",
        },
        {
          icon: <FaGoogle />,
          title: "Google Ads",
          description: "Leverage search and display ads to drive high-quality traffic.",
        },
        {
          icon: <FaYoutube />,
          title: "YouTube Management",
          description: "Maximize your channel's potential with effective content strategies.",
        },
        {
          icon: <FaChartBar />,
          title: "Analytics & Insights",
          description: "Get detailed reports to make data-driven decisions.",
        },
        {
          icon: <FaLaptopCode />,
          title: "Website Development",
          description: "Design user-friendly websites tailored to your needs.",
        },
        {
          icon: <FaEnvelopeOpenText />,
          title: "Email Marketing",
          description: "Deliver impactful email campaigns that convert leads into customers.",
        },
        {
          icon: <FaMobileAlt />,
          title: "Mobile App Marketing",
          description: "Grow your app's visibility with tailored promotional strategies.",
        },
      ];
      
  return (
    <div className="services-container">
      <div className="hero-section">
  <motion.h1
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1,
      type: "spring",
      stiffness: 150,
      damping: 15,
    }}
    whileHover={{ scale: 1.1 }}
  >
    Our Services
  </motion.h1>
  <motion.p
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
    whileHover={{ scale: 1.05 }}
  >
    Unlock the potential of your business with V-Knon Marketing Agency.
  </motion.p>
</div>

      <div className="services-section">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
