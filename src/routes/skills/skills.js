import TitleListCard from "../../components/titled-list-card/titled-list-card";

function Skills() {
  return (
    <div>
      <TitleListCard
        title={"Programming languages"}
        list={[
          "C#",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "SASS",
          "Tailwind CSS",
        ]}
      />
      <TitleListCard
        title={"Frameworks & Engines"}
        list={["Unity3d", "React", "Next.js"]}
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
