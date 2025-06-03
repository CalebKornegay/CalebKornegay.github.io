import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbFileDownload } from "react-icons/tb";
import styled from "styled-components";

export type homelink = {
  name: string;
  href: string;
};

export type hotlink = {
  resource: string;
  icon: IconType;
  icon_color: string;
};

export const homelinks: homelink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Interests",
    href: "#interests",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Skills",
    href: "#skills",
  },
];

export const hotlinks = [
  {
    resource: "/Resume.docx",
    icon: TbFileDownload,
    icon_color: "#121212",
  },
  {
    resource: "https://github.com/calebkornegay",
    icon: FaGithub,
    icon_color: "#000000",
  },
  {
    resource: "https://www.linkedin.com/in/caleb-kornegay-77923818a/",
    icon: FaLinkedin,
    icon_color: "#0077B5",
  },
];

export const Margin = styled.div`
  margin-top: 6rem;
`;
