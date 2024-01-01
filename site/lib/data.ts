import React from "react";
import { DiGithubAlt } from "react-icons/di";
import { FaUserGraduate, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { GiElectricalResistance } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import burnoutImg from "@/public/burnout-demo.jpg";
import sudokuImg from "@/public/sudoku.png";
import { TbFileDownload } from "react-icons/tb";

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
//   {
//     name: "Contact",
//     hash: "#contact",
//   },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's in Science",
    location: "Knoxville, TN",
    description:
      "Currently pursuing a bachelor's degree in computer science from the University of Tennessee, Knoxville.",
    icon: React.createElement(FaUserGraduate),
    date: "2021 - 2025",
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
    tags: ["React Native", "Django", "PostgreSQL", "Python", "Scripting"],
    imageUrl: burnoutImg,
  },
  {
    title: "Sudoku Generator",
    description:
      "A CLI for sudoku board random generation, playing, and solutions all in one place.",
    tags: ["C++", "Recursion", "Make"],
    imageUrl: sudokuImg,
  },
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

export const contactData = [
    {
        link: "/Resume.docx",
        icon: React.createElement(TbFileDownload),
    },
    {
        link: "https://www.instagram.com/__caleb_k__/",
        icon: React.createElement(FaInstagram),
    },
    {
        link: "mailto:caleb.kornegay@gmail.com",
        icon: React.createElement(CiMail),
    },
    {
        link: "https://github.com/CalebKornegay",
        icon: React.createElement(FaGithub),
    },
    {
        link: "https://www.linkedin.com/in/caleb-kornegay-77923818a/",
        icon: React.createElement(FaLinkedin),
    },
] as const;