import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../Button/button";
import "./_fieldoption-btns.scss";

function FieldOptionsBtns() {
  const [projects, career, skills] = ["projects", "career", "skills"];

  const [option, setOption] = useState("");
  const nav = useNavigate();

  const onSelectOption = function (selection) {
    let update = option === selection ? "" : selection;
    setOption(update);
    nav("/" + update);
  };
  return (
    <div className={`fieldoption-btns`}>
      <Button
        text={"Projects"}
        modifiers="btn--transparent"
        selected={option === projects}
        clickHandler={onSelectOption.bind(undefined, projects)}
      />
      <Button
        text={"Career"}
        modifiers="btn--transparent"
        selected={option === career}
        clickHandler={onSelectOption.bind(undefined, career)}
      />
      <Button
        text={"Skills"}
        modifiers="btn--transparent"
        selected={option === skills}
        clickHandler={onSelectOption.bind(undefined, skills)}
      />
    </div>
  );
}

export default FieldOptionsBtns;
