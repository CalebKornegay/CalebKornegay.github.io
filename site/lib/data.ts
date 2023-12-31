import React from "react";
import { DiGithubAlt } from "react-icons/di";
import { FaUserGraduate } from "react-icons/fa6";
import { GiElectricalResistance } from "react-icons/gi";
import burnoutImg from "@/public/burnout.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's in Science",
    location: "Knoxville, TN",
    description:
      "Currently pursuing a bachelor's degree in computer science from the University of Tennessee, Knoxville.",
    icon: React.createElement(FaUserGraduate),
    date: "2025",
  },
  {
    title: "Teacher's Assistant",
    location: "Knoxville, TN",
    description:
      "I worked as a teacher's assistant for 1.5 years at the University and decided to take a semester off for a co-op.",
    icon: React.createElement(DiGithubAlt),
    date: "2022 - 2023",
  },
  {
    title: "Electrical Engineer",
    location: "Knoxville, TN",
    description:
      "I am currently an electrical engineer at Siemens for the Spring - Summer 2024.",
    icon: React.createElement(GiElectricalResistance),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Burnout",
    description:
      "I worked as a full-stack developer on this project for 4 months, mainly frontend with ReactNative.",
    tags: ["ReactNative", "Django", "PostgreSQL", "Python", "Scripting"],
    imageUrl: burnoutImg,
  },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Django",
  "C++",
  "C",
  "Rust",
  "Bash",
  "Java",
] as const;