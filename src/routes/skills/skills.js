import TitleListCard from "../../components/titled-list-card/titled-list-card";

function Skills() {
  return (
    <div>
      <TitleListCard
        title={"Programming languages"}
        list={["C#", "JavaScript", "HTML", "CSS", "SASS"]}
      />
      <TitleListCard
        title={"Frameworks & Engines"}
        list={["Unity3d", "React"]}
      />
      <TitleListCard
        title={"Tools & Technologies"}
        list={[
          "Visual Studio, Visual Studio Code",
          " Blender",
          "Git",
          "Photoshop",
          "Figma",
          "Adobe Illustrator",
          "Webpack",
        ]}
      />
      <TitleListCard title={"Spoken Languages"} list={["English"]} />
    </div>
  );
}

export default Skills;
