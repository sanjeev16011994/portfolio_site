import { v4 as uuidv4 } from 'uuid';
import listening from "../images/listening.png";
import portfolio from "../images/portfolio.png";

export const MY_PORJECTS = [
  {
    id: uuidv4(),
    name: "Music App",
    description:"Simple music playing app created using html, css, and React",
    url: "https://music-player-4710c.web.app/",
    cover: listening,
  },
  {
    id: uuidv4(),
    name: "Portfolio App",
    description:"Portfolio app created using html, css, and React, Firebase",
    url: "https://myportfolio-70d50.web.app",
    cover: portfolio,
  }
];
