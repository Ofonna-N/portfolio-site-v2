import "./_projects.scss";
import { useState } from "react";
import Button from "../../components/Button/button";
import GameDevContainer from "../../components/game-dev-container/game-dev-container";

function Projects() {
  const [gameDev, webDev] = ["gameDev", "webDev"];
  const [option, setOption] = useState("");

  return (
    <div className="projects">
      <div className="projects__btns">
        <Button
          text={"Game Development"}
          modifiers="btn--transparent"
          selected={option === gameDev}
          clickHandler={() =>
            setOption((prev) => (prev === gameDev ? "" : gameDev))
          }
        />
        <Button
          text={"Web Development"}
          modifiers="btn--transparent"
          selected={option === webDev}
          clickHandler={() =>
            setOption((prev) => (prev === webDev ? "" : webDev))
          }
        />
      </div>

      <div className="projects__showcase">
        {option === gameDev && <GameDevContainer />}
        {option === webDev && "Coming soon..."}
      </div>
    </div>
  );
}

export default Projects;
