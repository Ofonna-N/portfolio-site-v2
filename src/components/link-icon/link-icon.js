import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_link-icon.scss";
function LinkIcon({ text, url, icon, modifiers }) {
  return (
    <a className={`link-icon ${modifiers}`} href={url} target="_blank">
      {text}
      {icon && <FontAwesomeIcon icon={icon} />}
    </a>
  );
}

export default LinkIcon;
