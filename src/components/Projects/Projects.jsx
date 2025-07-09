import Styled from "./projects.module.css";

function Projects({ imageUrl, description }) {
  return (
    <div className={Styled.card}>
      <img
        
        src="/assets/img/1.jpg" alt="project" className={Styled.image}
      />
      <p className={Styled.description}>{description}</p>
    </div>
  );
}

export default Projects;
