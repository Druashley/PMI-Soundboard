import beautifulPeople from "./sounds/pat-beautiful-people.mp3";
import overReaction from "./sounds/pat-over-reaction-monday.mp3";
import thousands from "./sounds/pat-thousands.mp3";
import shitTeam from "./sounds/connor-shittyteam.mp3";
import hawkPyramid from "./sounds/hawk-pyramid.mp3";
import tyHellyah from "./sounds/ty-hellyah.mp3";
import zitoDoingGood from "./sounds/zito-doingreallygood.mp3";
import zitoHellyah from "./sounds/zito-hellyeah.mp3";
import zitoPromoteVote from "./sounds/zito-promotethevote.mp3";
import gumpDahn from "./sounds/gump-dahn.mp3";

function soundList(stooge) {
  switch (stooge) {
    case "pat":
      return [
        {
          title: "Good afternoon",
          clip: beautifulPeople,
        },
        {
          title: "Monday",
          clip: overReaction,
        },
        {
          title: "Thousands",
          clip: thousands,
        },
      ];

    case "connor":
      return [
        {
          title: "Your shitty team",
          clip: shitTeam,
        },
      ];
    case "hawk":
      return [
        {
          title: "Pyramid",
          clip: hawkPyramid,
        },
      ];
    case "ty":
      return [
        {
          title: "Hell Yeah",
          clip: tyHellyah,
        },
      ];
    case "gump":
      return [
        {
          title: "Dahn",
          clip: gumpDahn,
        },
      ];

    case "zito":
      return [
        {
          title: "Doing good",
          clip: zitoDoingGood,
        },
        {
          title: "Hell Yeah",
          clip: zitoHellyah,
        },
        {
          title: "Promote",
          clip: zitoPromoteVote,
        },
      ];

    default:
      return [];
  }
}

export default soundList;
