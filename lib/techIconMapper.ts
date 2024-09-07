import { FaReact, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiW3Schools } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";





export type IconName = "FaReact" | "FaHtml5" | "RiTailwindCssFill" |"SiW3Schools" |"FaCss3Alt" |"SiMongodb" |"FaNode" |"IoLogoJavascript" | "FaBootstrap"|"SiExpress"; // DEFINE ICON NAMES AS TYPES

export const techIconMapper: Record<IconName, React.ComponentType> = {
  FaReact,
  FaHtml5,
  RiTailwindCssFill,
  SiW3Schools,
  FaCss3Alt,
  SiMongodb,
  FaNode,
  IoLogoJavascript,
  FaBootstrap,
  SiExpress,
};
