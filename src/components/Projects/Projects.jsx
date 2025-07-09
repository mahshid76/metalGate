import Styled from "./projects.module.css";

function Projects({ imageUrl, description }) {
  return (
    <div className={Styled.card}>
      <img
        
        src={`/assets/img/${imageUrl}`}
        alt="project"
        className={Styled.image}
      />
      <p className={Styled.description}>{description}</p>
    </div>
  );
}

export default Projects;
