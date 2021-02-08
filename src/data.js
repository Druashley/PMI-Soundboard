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
import tyCocaine from "./sounds/ty-cocaine.mp3";
import tyVote from "./sounds/ty-vote.mp3";
import connorNoway from "./sounds/connor-noway.mp3";
import zitoWhat from "./sounds/zito-what.mp3";
import zitoHype from "./sounds/zito-hype.mp3";
import mettOrder from "./sounds/mett-order.mp3";
import patNoNoNo from "./sounds/pat-nonono.mp3";
import gumpPee from "./sounds/gump-pee.mp3";
import patSituation from "./sounds/pat-situations.mp3";
import hawkWhatHappened from "./sounds/hawk-whatHappened.mp3";
import hawkPat from "./sounds/hawk-pat.mp3";
import hawkSituation from "./sounds/hawk-situations.mp3";
import patStooge from "./sounds/pat-stooge.mp3";
import tyAppreciate from "./sounds/ty-appreciate.mp3";

import patBadge from "./imgs/pat-badge.jpg";
import hawkBadge from "./imgs/hawk-badge.jpg";
import connorBadge from "./imgs/connor-badge.jpg";
import gumpBadge from "./imgs/gump-badge.jpg";
import mettBadge from "./imgs/mett-badge.jpg";
import tyBadge from "./imgs/ty-badge.jpg";
import zitoBadge from "./imgs/zito-badge.jpg";
import druBadge from "./imgs/dru-badge.jpg";

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
        {
          title: "NO NO NO",
          clip: patNoNoNo,
        },
        {
          title: "Situation",
          clip: patSituation,
        },
        {
          title: "Stooge",
          clip: patStooge,
        },
      ];

    case "connor":
      return [
        {
          title: "Your shitty team",
          clip: shitTeam,
        },
        {
          title: "No way",
          clip: connorNoway,
        },
      ];
    case "hawk":
      return [
        {
          title: "Pyramid",
          clip: hawkPyramid,
        },
        {
          title: "What just happened?",
          clip: hawkWhatHappened,
        },
        {
          title: "Pat Mcafee",
          clip: hawkPat,
        },
        {
          title: "Situations",
          clip: hawkSituation,
        },
      ];
    case "ty":
      return [
        {
          title: "Hell Yeah",
          clip: tyHellyah,
        },
        {
          title: "Cocaine",
          clip: tyCocaine,
        },
        {
          title: "Vote",
          clip: tyVote,
        },
        {
          title: "Appreciate",
          clip: tyAppreciate,
        },
      ];
    case "gump":
      return [
        {
          title: "Dahn",
          clip: gumpDahn,
        },
        {
          title: "Pee",
          clip: gumpPee,
        },
      ];
    case "mett":
      return [
        {
          title: "Order",
          clip: mettOrder,
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
        {
          title: "What",
          clip: zitoWhat,
        },
        {
          title: "Hype",
          clip: zitoHype,
        },
      ];

    default:
      return [];
  }
}

export function socialList(stooge) {
  switch (stooge) {
    case "pat":
      return [
        {
          picture: patBadge,
          name: "Pat Mcafee",
          handle: "@PatMcAfeeShow",
          link: "https://twitter.com/patmcafeeshow",
        },
      ];
    case "hawk":
      return [
        {
          picture: hawkBadge,
          name: "AJ Hawk",
          handle: "@OfficialAJHawk",
          link: "https://twitter.com/OfficialAJHawk",
        },
      ];
    case "connor":
      return [
        {
          picture: connorBadge,
          name: "Boston Connor",
          handle: "@BostonConnr",
          link: "https://twitter.com/bostonconnr",
        },
      ];
    case "gump":
      return [
        {
          picture: gumpBadge,
          name: "Gump Cathcart",
          handle: "@bubbagumpino",
          link: "https://twitter.com/bubbagumpino",
        },
      ];
    case "mett":
      return [
        {
          picture: mettBadge,
          name: "Mett",
          handle: "@PMIMett",
          link: "https://twitter.com/pmimett",
        },
      ];

    case "ty":
      return [
        {
          picture: tyBadge,
          name: "Ty Schmit",
          handle: "@tyschmit",
          link: "https://twitter.com/tyschmit",
        },
      ];
    case "zito":
      return [
        {
          picture: zitoBadge,
          name: "Lord Zito",
          handle: "@VivalaZito",
          link: "https://twitter.com/VivalaZito",
        },
      ];

    default:
      return [
        {
          picture: druBadge,
          name: "Dru Ashley",
          handle: "@Dru_ashley",
          link: "https://twitter.com/Dru_ashley",
        },
      ];
  }
}

export default soundList;
