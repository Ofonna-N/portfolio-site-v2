import { Outlet } from "react-router";
import FieldOptionsBtns from "../field-option-btns/fieldoption-btns";
import FieldSelectionBtns from "../field-selection-btns/field-selection-btns";
import NavBar from "../nav-bar/nav-bar";
import "./_hero.scss";

function Hero() {
  return (
    <main className="hero">
      <NavBar />
      <div className="hero__main">
        <h1 className="hero__title">Ofonna Michael Nweze</h1>
        <p className="hero__tagline">
          I'm a self motivated Front End Developer with experience in building
          games with c# and Unity. My main purpose in life is to make a positive
          impact that puts smiles on faces of people around the globe. I believe
          creating software is a superpower that can be attained through hard
          work and an insatiable appetite for creativity.
        </p>
        <FieldOptionsBtns />
        <Outlet />
      </div>
    </main>
  );
}

export default Hero;
