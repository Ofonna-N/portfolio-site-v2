import FieldOptionsBtns from "../../components/field-option-btns/fieldoption-btns";
import GameDevContainer from "../../components/game-dev-container/game-dev-container";
import "./_gamedev-route.scss";

function GameDevRoute() {
  return (
    <section className="gamedev-route">
      <FieldOptionsBtns />
      <GameDevContainer />
    </section>
  );
}

export default GameDevRoute;
