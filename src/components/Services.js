import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";

// Wrapper for the entire section
const SectionWrapper = styled.div`
  padding: 6rem 2rem;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// Section Title with fade-in animation
const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: fadeIn 1.5s forwards;

  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

// Content Wrapper for tiles and illustration
const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 1.5rem;
`;

// Tile Container for alternating positions
const TileContainer = styled.div`
  flex: 1 1 45%;
  min-width: 300px;
  display: flex;
  justify-content: ${(props) => (props.alignRight ? "flex-end" : "flex-start")};
  align-items: center;
  margin-right: ${(props) => (props.alignRight ? "30px" : "0")};
`;

// Individual Tile Styling
const Tile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 2rem 1.5rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  overflow: hidden;
  text-align: center;
  opacity: 0;
  transform: scale(0.9);
  animation: tileAnimation 0.8s ease-in-out forwards;

  &:hover {
    transform: translateY(-6px);
  }

  @keyframes tileAnimation {
    0% { opacity: 0; transform: scale(0.9) translateY(30px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
`;

// Header Section with Icon and Title Centered
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

// Centered Icon Styling
const IconContainer = styled.div`
  font-size: 3rem;
  color: #ff7e5f;
`;

// Tile Title
const TileTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
`;

// Content Section
const ContentContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

// Tile Description
const TileDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
`;

// Additional Content Section
const ExtraContent = styled.div`
  font-size: 1rem;
  color: #777;
  line-height: 1.4;
`;

// Illustration Styling
const IllustrationWrapper = styled.div`
  flex: 1 1 45%;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
  margin-left: -30px;
`;

// Illustration for each service
const Illustration = styled(motion.img)`
  max-width: 100%;
  max-height: 400px;
  height: auto;
  width: auto;
  border-radius: 10px;
  opacity: 0;
  animation: fadeInUp 1s ease-in-out forwards;

  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

// Tile Variant for animation
const tileVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      description:
        "Build responsive and user-friendly websites tailored to your needs with the latest technologies.",
      extraContent:
        "Fast loading, SEO optimization, and a focus on user experience.",
      image: "/images/web_dev_icon.png",
    },
    {
      icon: <FaChartLine />,
      title: "SEO Optimization",
      description:
        "Boost your search rankings and drive organic traffic effectively with advanced SEO strategies.",
      extraContent:
        "Keyword research, on-page optimization, and backlink strategies.",
      image: "/images/seo_optimization.png",
    },
    {
      icon: <FaUsers />,
      title: "Social Media Management",
      description:
        "Grow your audience, engage with followers, and manage your brand’s online presence efficiently.",
      extraContent:
        "Authentic content creation and audience engagement on major platforms.",
      image: "/images/soc_med_gra.png",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Branding",
      description:
        "Craft unique and impactful brand identities to stand out in a competitive market.",
      extraContent:
        "Comprehensive branding solutions including logos and color schemes.",
      image: "/images/branding.png",
    },
  ];

  return (
    <SectionWrapper>
      <SectionTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </SectionTitle>

      {services.map((service, index) => (
        <ContentWrapper key={index}>
          {/* Left Column: Illustration for index 1 and 3 */}
          {(index === 1 || index === 3) && (
            <IllustrationWrapper>
              <Illustration src={service.image} alt="Illustration" />
            </IllustrationWrapper>
          )}

          {/* Right Column: Tile */}
          <TileContainer alignRight={index % 2 !== 0}>
            <Tile
              variants={tileVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <HeaderContainer>
                <IconContainer>{service.icon}</IconContainer>
                <TileTitle>{service.title}</TileTitle>
              </HeaderContainer>
              <ContentContainer>
                <TileDescription>{service.description}</TileDescription>
                <ExtraContent>{service.extraContent}</ExtraContent>
              </ContentContainer>
            </Tile>
          </TileContainer>

          {/* Left Column: Illustration for index 0 and 2 */}
          {(index === 0 || index === 2) && (
            <IllustrationWrapper>
              <Illustration src={service.image} alt="Illustration" />
            </IllustrationWrapper>
          )}
        </ContentWrapper>
      ))}
    </SectionWrapper>
  );
};

export default Services;
