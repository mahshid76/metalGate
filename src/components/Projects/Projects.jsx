import Styled from "./projects.module.css";

function Projects({ imageUrl, description }) {
  return (
    <div className={Styled.card}>
      <img
        src={`/img/${imageUrl}`}/>
      <p className={Styled.description}>{description}</p>
    </div>
  );
}

export default Projects;
