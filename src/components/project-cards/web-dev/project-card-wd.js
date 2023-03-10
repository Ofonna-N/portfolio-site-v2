import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LinkIcon from "../../link-icon/link-icon";
import "./_project-card-wd.scss";

function ProjectCardWd({
  title,
  thumbnail,
  description,
  demoLink,
  githubLink,
}) {
  return (
    <div className="project-card-wd">
      <h2 className="project-card-wd__title">{title}</h2>
      <div
        className="project-card-wd__img"
        onClick={() => window.open(githubLink, "_blank")}
      >
        <img src={thumbnail} alt="" />
      </div>
      <div className="project-card-wd__description">{description}</div>
      <div className="project-card-wd__btns">
        <LinkIcon
          text={"View Demo"}
          url={demoLink}
          modifiers={"link-icon--accent"}
          icon={faAngleRight}
        />
        <LinkIcon
          text={"View Github"}
          url={githubLink}
          modifiers={"link-icon--accent"}
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default ProjectCardWd;
