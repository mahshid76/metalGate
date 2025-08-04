import styled from "./home.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import { useState, useEffect } from "react";

function Home() {
  const [projects, setProjects] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/assets/img/1.jpg",
    "/assets/img/2.jpg",
    "/assets/img/3.jpg",
    "/assets/img/4.jpg"
  ];

  useEffect(() => {
    fetch("http://localhost:5500/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const currentBg = backgroundImages[currentImageIndex];

  return (
    <>
      <Navbar title="METAL GATES" />

    <div
  className={styled.ctaSection}
  style={{
    backgroundImage: `url(${currentBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    filter: "brightness(0.5)"
  }}
>
  <div className={styled.ctaContent}>
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
</div>


      <div className={styled.title}>Our Projects</div>

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
