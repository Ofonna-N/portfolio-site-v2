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
          Passionate about creating exceptional user experiences, I am a
          frontend developer proficient in React, Next.js. With a strong focus
          on building responsive and interactive web applications, I combine my
          technical expertise with creative problem-solving to deliver seamless
          user interfaces. Additionally, I have a keen interest in game
          development and possess the ability to create games using C# and
          Unity. I am constantly exploring new technologies and techniques to
          stay at the forefront of the ever-evolving field of frontend
          development. Let's connect and collaborate on innovative projects.
        </p>
        <FieldOptionsBtns />
        <Outlet />
      </div>
    </main>
  );
}

export default Hero;
