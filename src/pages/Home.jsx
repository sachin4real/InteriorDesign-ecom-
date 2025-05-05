// src/pages/Home.jsx
import React, { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeatureSection from "../components/FeatureSection";
import ThreeSteps from "../components/ThreeSteps";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const supportRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans">
      <Header onNavigate={{
        home: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        services: () => scrollToSection(servicesRef),
        contact: () => scrollToSection(contactRef),
        support: () => scrollToSection(supportRef),
      }} />

      <Hero />
   
      <div ref={servicesRef}><Services /></div>
      <FeatureSection />
      <ThreeSteps />
      <div ref={contactRef}><Testimonials /></div>
      <div ref={supportRef}><Newsletter /></div>
      <Footer />
    </div>
  );
};

export default Home;
