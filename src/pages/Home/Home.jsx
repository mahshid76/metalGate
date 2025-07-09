import styled from "./home.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import { useState, useEffect } from "react";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <>
      <Navbar title="METAL GATES" />

        <div className={styled.ctaSection}>
          <h2>Looking for a Metal Gate?</h2>
          <p>Contact us now or send a message via WhatsApp.</p>
          <a
            href="https://wa.me/447710063815?text=Hi%2C%20I%27m%20interested%20in%20metal%20gates"
            target="_blank"
            rel="noopener noreferrer"
            className={styled.ctaButton}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
        <div className={styled.title}>
          Our Projects</div>

      <div className={styled.container}>
        <div className={styled.project}>
          {projects.map((project) => (
            <Projects
              key={project.id}
              imageUrl={project.imageUrl}
              description={project.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
