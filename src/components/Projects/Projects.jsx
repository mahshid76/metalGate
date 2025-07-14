import Styled from "./projects.module.css";

function Projects({ imageUrl, description }) {
  return (
    <div className={Styled.card}>
      <img 
        className={Styled.image}
        src={`/assets/img/${imageUrl}`}
        alt={description}
      />
      <p className={Styled.description}>{description}</p>
    </div>
  );
}

export default Projects;
