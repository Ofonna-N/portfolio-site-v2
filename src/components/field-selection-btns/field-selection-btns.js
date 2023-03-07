import { useState } from "react";
import Button from "../Button/button";
import "./_field-selection-btns.scss";

function FieldSelectionBtns() {
  const [gameDev, webDev] = ["gameDev", "webDev"];
  const [selected, setSelected] = useState("");

  const onSelectbtnClick = function (option) {
    // console.log("clicked btn");
    if (option === selected) {
      option = "";
    }
    setSelected(option);

    // switch (option) {
    //   case gameDev:
    //     navigate("game-development");
    //     break;
    //   case webDev:
    //     navigate("web-development");
    //     break;

    //   default:
    //     navigate("/");
    //     break;
    // }
  };

  return (
    <div className="field-selection-btns">
      <Button
        text={"Game Development"}
        modifiers="btn--transparent"
        selected={selected === gameDev}
        clickHandler={onSelectbtnClick.bind(undefined, gameDev)}
      />
      <Button
        text={"Web Development"}
        modifiers={`btn--transparent`}
        selected={selected === webDev}
        clickHandler={onSelectbtnClick.bind(undefined, webDev)}
      />
    </div>
  );
}

export default FieldSelectionBtns;
