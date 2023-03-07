// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./_nav-bar.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LinkIcon from "../link-icon/link-icon";
import { useNavigate } from "react-router";

// import logoImg from "../../../public/logo.jpg";
function NavBar() {
  const nav = useNavigate();
  return (
    <header className="nav-bar">
      <div className="nav-bar__logo-container">
        <img
          className="nav-bar__logo"
          src={`${process.env.PUBLIC_URL}/logo.jpg`}
          alt="logo"
          // onClick={() => {
          //   nav("/");
          // }}
        />
      </div>
      <h1
        className="nav-bar__title"
        // onClick={() => {
        //   nav("/");
        // }}
      >
        Ofonna Michael Nweze
      </h1>
      <ul className="nav-bar__social-links">
        <li className="nav-bar__social-link">
          <LinkIcon
            icon={faGooglePlay}
            url={
              "https://play.google.com/store/apps/dev?id=7837179898460799569"
            }
          />
        </li>
        <li className="nav-bar__social-link">
          <LinkIcon icon={faEnvelope} url={"mailto:nwezeofonna@gmail.com"} />
        </li>
        <li className="nav-bar__social-link">
          <LinkIcon icon={faGithub} url={"https://github.com/Ofonna-N"} />
        </li>
        <li className="nav-bar__social-link">
          <LinkIcon
            icon={faLinkedin}
            url={"https://www.linkedin.com/in/ofonna-nweze-2abbb9173/"}
          />
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
