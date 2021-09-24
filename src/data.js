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
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-beautiful-people.mp3",
        },
        {
          title: "Monday",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-over-reaction-monday.mp3",
        },
        {
          title: "Thousands",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-thousands.mp3",
        },
        {
          title: "NO NO NO",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-nonono.mp3",
        },
        {
          title: "Situation",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-situations.mp3",
        },
        {
          title: "Stooge",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-stooge.mp3",
        },
        {
          title: "Jeez",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-jeez.mp3",
        },
        {
          title: "AMC",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-amc.mp3",
        },
        {
          title: "This Show Stinks",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-stinks.mp3",
        },
        {
          title: "My Show",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-myshow.mp3",
        },
        {
          title: "Welcome aboard",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-welcome.mp3",
        },
        {
          title: "Get Got",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-getgot.mp3",
        },
        {
          title: "Bear Moose Elk",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-bear-moose-elk.mp3",
        },
        {
          title: "Not True",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/pat/pat-nottrue.mp3",
        },
      ];

    case "connor":
      return [
        {
          title: "Your shitty team",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/connor/connor-shittyteam.mp3",
        },
        {
          title: "No way",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/connor/connor-noway.mp3",
        },
        {
          title: "Founding Fathers",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/connor/connor-fathers.mp3",
        },
      ];
    case "hawk":
      return [
        {
          title: "Pyramid",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/hawk/hawk-pyramid.mp3",
        },
        {
          title: "What just happened?",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/hawk/hawk-whatHappened.mp3",
        },
        {
          title: "Pat Mcafee",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/hawk/hawk-pat.mp3",
        },
        {
          title: "Situations",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/hawk/hawk-situations.mp3",
        },
        {
          title: "I don't watch",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/hawk/hawk-usedto.mp3",
        },
      ];
    case "ty":
      return [
        {
          title: "Hell Yeah",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/ty/ty-hellyah.mp3",
        },
        {
          title: "Cocaine",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/ty/ty-cocaine.mp3",
        },
        {
          title: "Vote",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/ty/ty-vote.mp3",
        },
        {
          title: "Appreciate",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/ty/ty-appreciate.mp3",
        },
        {
          title: "Woods",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/ty/ty-woods.mp3",
        },
        {
          title: "That's right",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/ty/ty-Right.mp3",
        },
      ];
    case "gump":
      return [
        {
          title: "Dahn",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/gump/gump-dahn.mp3",
        },
        {
          title: "Pee",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/gump/gump-pee.mp3",
        },
      ];
    case "mett":
      return [
        {
          title: "Order",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/mett/mett-order.mp3",
        },
      ];

    case "zito":
      return [
        {
          title: "Doing good",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/zito/zito-doingreallygood.mp3",
        },
        {
          title: "Hell Yeah",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/zito/zito-hellyeah.mp3",
        },
        {
          title: "Promote",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/zito/zito-promotethevote.mp3",
        },
        {
          title: "What",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/zito/zito-what.mp3",
        },
        {
          title: "Hype",
          clip: "https://pmisoundboard.s3.us-east-2.amazonaws.com/sounds/zito/zito-hype.mp3",
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
