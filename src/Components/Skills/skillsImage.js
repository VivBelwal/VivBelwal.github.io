import html from "../../img/skills/html.svg";
import css from "../../img/skills/css.svg";
import javascript from "../../img/skills/javascript.svg";
import react from "../../img/skills/react.svg";
import typescript from "../../img/skills/typescript.png";
import bootstrap from "../../img/skills/bootstrap.svg";
import mongoDB from "../../img/skills/mongoDB.svg";
import mysql from "../../img/skills/mysql.svg";
import aws from "../../img/skills/aws.svg";
import github from "../../img/skills/github.png";
import canva from "../../img/skills/canva.svg";
import nodejs from "../../img/skills/nodejs.png";
import chakraui from "../../img/skills/chakraui.png";
import expressjs from "../../img/skills/expressjs.png";
import postman from "../../img/skills/postman.svg";
import redux from "../../img/skills/redux.png";
import replit from "../../img/skills/replit.svg";
import vscode from "../../img/skills/vscode.png";
import gmail from "../../img/skills/gmail.png";
import linkdin from "../../img/skills/linkdin.png"

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "aws":
      return aws;
    case "github":
      return github;
    case "canva":
      return canva;
    case "nodejs":
      return nodejs;
      case "chakra ui":
      return chakraui;
      case "expressjs":
      return expressjs;
      case "postman":
      return postman;
      case "redux":
      return redux;
      case "replit":
      return replit;
      case "vs code":
      return vscode;
      case "gmail":
      return gmail;
      case "linkdin":
      return linkdin;
      

    default:
      break;
  }
};
