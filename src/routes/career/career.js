import TitleListCard from "../../components/titled-list-card/titled-list-card";

function Career() {
  return (
    <div>
      <TitleListCard
        title={
          "Hyper Casual game developer, \nsmally games (founder), September 2018-Present."
        }
        list={[
          "Used Unity and C# programming language to develop game prototypes based on ideas from gaming publishers.",
          "Collaborated extensively with the Game design team and product managers to take project goals, break each into job tasks and prioritize tasks for easier management.",
          "Met strict deadlines for on-schedule game delivery by leveraging time management, team leadership and task prioritization skills.",
          "Created distinctive and appealing games by devising fresh and engaging art, sound, video and AI behaviors",
          "Solicited, obtained and integrated feedback from design and technical staff into original game design.",
        ]}
      />
      <TitleListCard
        title={"Game Developer, \nMoonee, Publishing June 2021- May 2022"}
        list={[
          "Met strict deadlines for on-schedule game delivery by leveraging time management and task prioritisation skills",
          "Worked closely with team members to deliver project requirements, develop solutions and meet deadlines.",
        ]}
      />
      <TitleListCard
        title={
          "Game Developer, \nLion Studios, Publishing, May 2021 - June 2021"
        }
        list={[
          "Accomplished project objectives in technical and design areas to facilitate smooth, customer focused gameplay",
          "Reported progress and resolved problems to keep projects on schedule and within budget parameters.",
        ]}
      />
      <TitleListCard
        title={
          "Game Developer, \nKetchapp, Publishing February 2021- March 2021"
        }
        list={[
          "Participated in team meetings and provided input on deadlines, designs and enhancements.",
          "Tested Game project to alleviate bugs and troubleshoot issues prior to going live.",
        ]}
      />
    </div>
  );
}

export default Career;
