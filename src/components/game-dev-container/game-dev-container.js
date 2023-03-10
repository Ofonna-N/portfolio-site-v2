import "./_game-dev-container.scss";
import ProjectCardGd from "../project-cards/game-dev/project-card-gd";
import crowdStepVid from "../../static/videos/crowd-step-1.m4v";
import storeRush from "../../static/videos/Store-Rush-1.mp4";
import manBashVid from "../../static/videos/Man-Bash-1.m4v";
import knightsDuel from "../../static/videos/Knights-Duel-1.m4v";
import guardRun from "../../static/videos/guard run.m4v";
import fidgetPopSweeper from "../../static/videos/fidgePopSweeper.m4v";
import hammerMaster from "../../static/videos/hammer-master.m4v";

const gameDevContent = [
  {
    icon: "https://play-lh.googleusercontent.com/mrOJ1sJ9yL58ETBzioAnoOWUOetwozUOGwGbcUquU9dXcH0n8YmzdWUHF6-hkTt9Kg=s48-rw",
    title: "Super Store Rush",
    description:
      "build up your store from scratch and work your way into being the most successful store owners on the planet, unlock registers, shelves and offload vans to hasten the production and earnings for your store",
    video_src: storeRush,
    google_link:
      "https://play.google.com/store/apps/details?id=com.SmallyGames.SuperStoreRush",
    git_link: "https://github.com/Ofonna-N/Superstore-Rush",
    isTablet: true,
  },
  {
    icon: "https://play-lh.googleusercontent.com/WJ8A9LKg6anuXt0kMmBAyRf1zItfV_buIEGAiXCf-MZ5f42s5v8w6Lbwrr87EhOqjfw=s48-rw",
    title: "crowd step",
    description:
      "Crowd Step is a 2.5D runner build in 7 days where the player controls a character across several gates along the way which determine how much extra characters get added to the crowd",
    video_src: crowdStepVid,
    google_link:
      "https://play.google.com/store/apps/details?id=com.SmallyGames.CrowdStep",
    git_link: "https://github.com/Ofonna-N/Crowd-Step",
    isTablet: false,
  },
  {
    icon: "https://play-lh.googleusercontent.com/Ds7zYcfJrkH5It_DIMFrx7P0zE0xSW_C2nBbNCLEyxChspK32QIfVtoeOlzBDSZagQ=s48-rw",
    title: "Man Bash 3D",
    description:
      "Man Bash 3D is a 3D hypercasual game created in 7 days whose main goal was to explore the first person mechanic in a hypercasual setting. In this game, the player taps on the screen to use the hammer to kill enemies in the level which are colored red.",
    video_src: manBashVid,
    google_link:
      "https://play.google.com/store/apps/details?id=com.SmallyGames.ManBash3D",
    git_link: "",
    isTablet: false,
  },
  {
    icon: "https://play-lh.googleusercontent.com/XOigcmH0b5m2bwJJYV9zfKhHbFgsgfaqaf1fvl8sqKEsY3OKhUFcNlh2YujWtSdtKJs=s48-rw",
    title: "Swipe Duel",
    description:
      "Swipe Duel brings sword fighting to the hypercasual world, by enabling players to engage in a full on sword combat by just swiping the screen. This game relies on timing and speed as the player has to either attack or dodge at the right time to avoid getting demolished.",
    video_src: knightsDuel,
    google_link:
      "https://play.google.com/store/apps/details?id=com.SmallyGames.SwipeDuel",
    git_link: "https://github.com/Ofonna-N/Knight-Duel",
    isTablet: false,
  },
  {
    icon: "https://play-lh.googleusercontent.com/7EL4betX65vQdj6R5Lsgmx1qxBdUynsBtNukDE375O-IxyoipTLtHAGsr5x8psX9TQ=s48-rw",
    title: "Guard Run",
    description:
      "Run Guide Swerve Player across level and push obstacles away to protect your ball from getting popped. The game is easy to learn and fun to play.just swerve and hit!",
    video_src: guardRun,
    google_link:
      "https://play.google.com/store/apps/details?id=com.SmallyGames.GuardRun",
    git_link: "",
    isTablet: false,
  },
  {
    icon: "https://play-lh.googleusercontent.com/xTbxh3cIE-Wivr9l8s3sI4GUWPa7ADcPThrAKGp4JVQaielMa7G5qirvi_ws7dN7VX4=s48-rw",
    title: "Fidget Pop Sweeper",
    description:
      "This game is a combination of the mine sweeper classic with the satisfying feeling of playing with fidget pop toys. this board game will have you relaxed, tensed and having fun all at once. fidget pop toys are amazing and so is mine sweeper. Enjoy the best of both worlds.",
    video_src: fidgetPopSweeper,
    google_link:
      "https://play.google.com/store/apps/details?id=com.SmallyGames.FidgetPopSweeper",
    git_link: "",
    isTablet: false,
  },
  {
    icon: "https://play-lh.googleusercontent.com/LR1QdBPDwlMLQ9tmsL_sm3mRtoo9QnWPwg1vUJTr1FAn4yQYoH3YK5QE3OhAVwJrZQ=s48-rw",
    title: "Hammer Master 3D",
    description:
      "Swerve hammer across level to reach the nails with the smallest numbers, ensure your hammer has a higher number than the nail you're trying to hit, each hit deducts a number from the nail and your hammer, so you have to se smart, you also have pick ups along the way to increase your hits and chances of winnning. the game was made to create a satisfying feel of banging nails into the ground.",
    video_src: hammerMaster,
    google_link:
      "https://play.google.com/store/apps/details?id=com.SmallyGames.HammerMaster3D",
    git_link: "",
    isTablet: false,
  },
];

function GameDevContainer() {
  const gamedevContentDisplay = () => {
    return gameDevContent.map((content, i) => {
      return (
        <ProjectCardGd
          key={i}
          icon={content.icon}
          title={content.title}
          description={content.description}
          video_src={content.video_src}
          google_link={content.google_link}
          git_link={content.git_link}
          isTablet={content.isTablet}
        />
      );
    });
  };

  return <div className="game-dev-container">{gamedevContentDisplay()}</div>;
}

export default GameDevContainer;
