import "./_project-card-gd.scss";

// import vid from "../../../static/videos/Proto 2.mp4";
import phoneImg from "../../../static/images/phone.png";
import tablet from "../../../static/images/tablet.png";
import LinkIcon from "../../link-icon/link-icon";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

//
function ProjectCardGd({
  icon,
  title = "crowd step",
  description,
  video_src,
  google_link,
  git_link,
  isTablet,
}) {
  return (
    <div className="project-card-gd">
      <div className="project-card-gd__header">
        <img
          className="project-card-gd__icon"
          src={icon}
          alt="crowd step icon"
        />
        <h2 className="project-card-gd__title">{title}</h2>
      </div>

      <div className={`project-card-gd__graphic ${isTablet ? "tab" : ""}`}>
        <div className="wrapper">
          <div className="project-card-gd__video-container">
            <video
              className="project-card-gd__video"
              autoPlay
              loop
              playsInline
              muted
            >
              <source src={video_src} type="video/mp4" />
            </video>
          </div>
          <img
            className="project-card-gd__img"
            src={isTablet ? tablet : phoneImg}
            alt=""
          />
        </div>
      </div>
      <div className="project-card-gd__description">
        <p>{description}</p>
      </div>
      <div className="project-card-gd__btns">
        {google_link && (
          <LinkIcon
            text={"Play"}
            icon={faGooglePlay}
            modifiers={"link-icon--btn"}
            url={google_link}
          />
        )}
        {git_link && (
          <LinkIcon
            text={"Git"}
            icon={faGithub}
            modifiers={"link-icon--btn"}
            url={git_link}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCardGd;
