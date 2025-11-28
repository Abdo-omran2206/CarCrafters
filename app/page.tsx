"use client";
import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About, { WhyUs } from "./components/about";
import Featured from "./components/featured";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  const [activePage, setActivePage] = useState("Home");

  const renderContent = () => {
    switch (activePage) {
      case "Home":
        return (
          <>
            <Hero />
            <About />
            <WhyUs />
            <Featured />
            <Cta />
            <Footer />
          </>
        );
      case "About":
        return (
          <>
            <About />
            <WhyUs />
            <Footer />
          </>
        );
      case "Featured Cars":
        return (
          <>
            <Featured />
            <Cta />
            <Footer />
          </>
        );
      case "Contact":
        return (
          <>
            <Cta />
            <Footer />
          </>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <Navbar onNavigate={setActivePage} />
      {renderContent()}
    </>
  );
}
