import styled from '@emotion/styled';
import { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaRust } from 'react-icons/fa6';
import { TbFileDownload } from 'react-icons/tb';

import AmazonwebservicesOriginalWordmark from 'devicons-react/lib/icons/AmazonwebservicesOriginalWordmark';
import AndroidOriginal from 'devicons-react/lib/icons/AndroidOriginal';
import ArduinoOriginal from 'devicons-react/lib/icons/ArduinoOriginal';
import BashOriginal from 'devicons-react/lib/icons/BashOriginal';
import COriginal from 'devicons-react/lib/icons/COriginal';
import ChromeOriginal from 'devicons-react/lib/icons/ChromeOriginal';
import CmakeOriginal from 'devicons-react/lib/icons/CmakeOriginal';
import CplusplusOriginal from 'devicons-react/lib/icons/CplusplusOriginal';
import CsharpOriginal from 'devicons-react/lib/icons/CsharpOriginal';
import Css3Original from 'devicons-react/lib/icons/Css3Original';
import DatagripOriginal from 'devicons-react/lib/icons/DatagripOriginal';
import DjangoPlain from 'devicons-react/lib/icons/DjangoPlain';
import DockerOriginal from 'devicons-react/lib/icons/DockerOriginal';
import EmbeddedcOriginal from 'devicons-react/lib/icons/EmbeddedcOriginal';
import EslintOriginal from 'devicons-react/lib/icons/EslintOriginal';
import ExpressOriginal from 'devicons-react/lib/icons/ExpressOriginal';
import FigmaOriginal from 'devicons-react/lib/icons/FigmaOriginal';
import FlaskOriginal from 'devicons-react/lib/icons/FlaskOriginal';
import FramermotionOriginal from 'devicons-react/lib/icons/FramermotionOriginal';
import GitOriginal from 'devicons-react/lib/icons/GitOriginal';
import GithubOriginal from 'devicons-react/lib/icons/GithubOriginal';
import GithubactionsOriginal from 'devicons-react/lib/icons/GithubactionsOriginal';
import GitlabOriginal from 'devicons-react/lib/icons/GitlabOriginal';
import GoOriginal from 'devicons-react/lib/icons/GoOriginal';
import GradleOriginal from 'devicons-react/lib/icons/GradleOriginal';
import HardhatOriginal from 'devicons-react/lib/icons/HardhatOriginal';
import HaskellOriginal from 'devicons-react/lib/icons/HaskellOriginal';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import JavaOriginal from 'devicons-react/lib/icons/JavaOriginal';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import JiraOriginal from 'devicons-react/lib/icons/JiraOriginal';
import JsonOriginal from 'devicons-react/lib/icons/JsonOriginal';
import KotlinOriginal from 'devicons-react/lib/icons/KotlinOriginal';
import LinuxOriginal from 'devicons-react/lib/icons/LinuxOriginal';
import NextjsOriginal from 'devicons-react/lib/icons/NextjsOriginal';
import NodejsOriginal from 'devicons-react/lib/icons/NodejsOriginal';
import NotionOriginal from 'devicons-react/lib/icons/NotionOriginal';
import NugetOriginal from 'devicons-react/lib/icons/NugetOriginal';
import PolygonOriginal from 'devicons-react/lib/icons/PolygonOriginal';
import PostgresqlOriginal from 'devicons-react/lib/icons/PostgresqlOriginal';
import PostmanOriginal from 'devicons-react/lib/icons/PostmanOriginal';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import QtOriginal from 'devicons-react/lib/icons/QtOriginal';
import RaspberrypiOriginal from 'devicons-react/lib/icons/RaspberrypiOriginal';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import RustOriginal from 'devicons-react/lib/icons/RustOriginal';
import SolidityOriginal from 'devicons-react/lib/icons/SolidityOriginal';
import SshOriginal from 'devicons-react/lib/icons/SshOriginal';
import SqldeveloperOriginal from 'devicons-react/lib/icons/SqldeveloperOriginal';
import TailwindcssOriginal from 'devicons-react/lib/icons/TailwindcssOriginal';
import TypescriptOriginal from 'devicons-react/lib/icons/TypescriptOriginal';
import VisualstudioOriginal from 'devicons-react/lib/icons/VisualstudioOriginal';
import VscodeOriginal from 'devicons-react/lib/icons/VscodeOriginal';
import Windows11Original from 'devicons-react/lib/icons/Windows11Original';
import XmlOriginal from 'devicons-react/lib/icons/XmlOriginal';
import YamlOriginal from 'devicons-react/lib/icons/YamlOriginal';
import ZigOriginal from 'devicons-react/lib/icons/ZigOriginal';

export type homelink = {
  name: string;
  href: string;
};

export type hotlink = {
  resource: string;
  icon: IconType;
  icon_color: string;
};

export type Skill = {
    name: string;
    icon: React.FunctionComponent | null | undefined;
    children?: Skill[];
};

export type Skills = {
    languages: Skill[];
    tools: Skill[];
    frameworks: Skill[];
};

export type project = {
    title: string;
    timeline: string;
    description: string;
    skills: string[];
    media: string;
    media_alt: string;
};

export type experience = {
    title: string;
    timeline: string;
    description: string[];
}

export const homelinks = [
  {
    name: "Home",
    href: "#home",
  } as homelink,
  {
    name: "Interests",
    href: "#interests",
  } as homelink,
  {
    name: "Projects",
    href: "#projects",
  } as homelink,
  {
    name: "Experience",
    href: "#experience",
  } as homelink,
  {
    name: "Skills",
    href: "#skills",
  } as homelink
] as const;

export const hotlinks = [
  {
    resource: "/resume.pdf",
    icon: TbFileDownload,
    icon_color: "#000",
  } as hotlink,
  {
    resource: "https://github.com/calebkornegay",
    icon: FaGithub,
    icon_color: "#000",
  } as hotlink,
  {
    resource: "https://www.linkedin.com/in/caleb-kornegay",
    icon: FaLinkedin,
    icon_color: "#0077B5",
  } as hotlink
] as const;

export const about_me_paragraphs = [
    `Hello, I'm Caleb, an aspiring software engineer from Knoxville,
        Tennesee.`,
    `I recently graduated with a Bachelor's of Science in Computer Science
        with a minor in cybersecurity from the University of Tennessee -
        Knoxville.`
] as const;

export const interests_paragraphs = [
    `I am mostly interested in embedded development using C/C++.`,
    `I also enjoy mobile and backend development.`,
    `I am currently expanding my Rust portfolio.`
] as const;

export const projects = [
    {
        title: "Openticket",
        timeline: "January - May 2025",
        description: `A blockchain-powered alternative to TicketMaster 
                that implements a low-cost and scalp-resistant ticketing
                solution.`,
        skills: [
            "Golang",
            "AWS",
            "React",
            "React Native",
            "Radix UI",
            "CDK",
            "SQL",
            "Solidity"
        ],
        media: "/senior_design/user_home_1.png",
        media_alt: "Blockchain event ticketing"
    } as project,
    {
        title: "Fzk",
        timeline: "May - June 2025",
        description: `A fuzzy matching TUI that makes killing processes a breeze.`,
        skills: [
            "Rust",
            "Multithreading",
            "TUI",
            "Clap",
            "Fuzzy Search",
            "Traits",
            "Synchronization"
        ],
        media: "/fzk_windows_default.png",
        media_alt: "Fuzzy process killer"
    } as project,
    {
        title: "Rdiff",
        timeline: "April - May 2025",
        description: `A file difference viewer Terminal User Interface (TUI)
                written in Rust with syntax highlighting.`,
        skills: [
            "Rust",
            "Cargo",
            "Ratatui",
            "Clap",
            "Syntect",
            "Sha2",
            "TUI"
        ],
        media: "/rdiff.png",
        media_alt: "2 files being diffed"
    } as project,
    {
        title: "Digital Dash",
        timeline: "November 2024 - January 2025",
        description: "A digital representation of your car's data, easily viewable from your phone.",
        skills: [
            "Golang",
            "Systemd",
            "Bash",
            "Kotlin",
            "Bluetooth LE",
            "OBD-II"
        ],
        media: "/digital_dash.png",
        media_alt: "Digital Dash"
    } as project
] as const;

export const experiences = [
    {
        title: "Embedded Software Engineer Intern",
        timeline: "January - August 2024",
        description: [
            `I took a semester off of school to coop at Siemens Healthineers.`,
            `My main project was a RESTful web server and corresponding user
          interface on a Zephyr RTOS device. It was responsible for reporting
          the Differential Clock Source's metrics and being able to view and
          change its state and file system. Primary usage was for engineering
          debugging without JTAG due to the device's enclosure.`,
            `I was put in charge of hardware, wiring, soldering, and software for a
          distributed system that is responsible for measuring flow rates at 39
          different endpoints and interacting with a PLC (modbus) and another
          embedded device simultaneously and logging their respective metrics.`,
            `I was responsible for expanding a current GUI application to include
          tests for Time to Digital Converters (TDCs) including the normal
          functional test and a configurable sweeping delay test. After adding
          this functionality I was asked to expand this to another board to be
          under the same software solution. This was then expanded to include
          non-sine wave DAC outputs so that the op amp could be debugged as
          well. I was able to finish the embedded software for this before I
          left, but not the GUI implementation.`,
            `I was tasked with a CUDA/C++ project to help scale processing
          speeds with their data acquisition rates by leveraging GPU
          acceleration which has now been taken over by someone else.`
        ]
    } as experience
] as const;

export const skills = {
    languages: [
        {
            name: "C",
            icon: COriginal
        },
        {
            name: "C++",
            icon: CplusplusOriginal
        },
        {
            name: "C#",
            icon: CsharpOriginal
        },
        {
            name: "Bash",
            icon: BashOriginal
        },
        {
            name: "Rust",
            icon: RustOriginal
        },
        {
            name: "Typescript",
            icon: TypescriptOriginal
        },
        {
            name: "Javascript",
            icon: JavascriptOriginal
        },
        {
            name: "SQL",
            icon: SqldeveloperOriginal
        },
        {
            name: "Solidity",
            icon: SolidityOriginal
        },
        {
            name: "Zig",
            icon: ZigOriginal
        },
        {
            name: "Kotlin",
            icon: KotlinOriginal
        },
        {
            name: "Python",
            icon: PythonOriginal
        },
        {
            name: "HTML",
            icon: Html5Original
        },
        {
            name: "CSS",
            icon: Css3Original
        },
        {
            name: "Haskell",
            icon: HaskellOriginal
        },
        {
            name: "Java",
            icon: JavaOriginal
        },
        {
            name: "Go",
            icon: GoOriginal
        },
        {
            name: "Embedded C",
            icon: EmbeddedcOriginal
        }

    ],
    tools: [
        {
            name: "Git",
            icon: GitOriginal,
            children: [
                {
                    name: "Github",
                    icon: GithubOriginal
                },
                {
                    name: "Gitlab",
                    icon: GitlabOriginal
                },
                {
                    name: "Github Actions",
                    icon: GithubactionsOriginal
                }
            ]
        },
        
        {
            name: "Operating Systems",
            children: [
                {
                    name: "ZephyrRTOS"
                },
                {
                    name: "Linux",
                    icon: LinuxOriginal
                },
                {
                    name: "Windows",
                    icon: Windows11Original
                }
            ]
        },
        {
            name: "PostgreSQL",
            icon: PostgresqlOriginal
        },
        {
            name: "Arduino",
            icon: ArduinoOriginal
        },
        {
            name: "Raspberry Pi",
            icon: RaspberrypiOriginal
        },
        {
            name: "Bluetooth"
        },
        {
            name: "AWS",
            icon: AmazonwebservicesOriginalWordmark,
            children: [
                {
                    name: "CDK"
                },
                {
                    name: "RDS"
                },
                {
                    name: "VPC"
                },
                {
                    name: "SNS"
                },
                {
                    name: "SQS"
                }
            ]
        },
        {
            name: "Cargo"
        },
        {
            name: "Visual Studio",
            icon: VisualstudioOriginal
        },
        {
            name: "Visual Studio Code",
            icon: VscodeOriginal
        },
        {
            name: "Datagrip",
            icon: DatagripOriginal
        },
        {
            name: "Data Formats",
            children: [
                {
                    name: "JSON",
                    icon: JsonOriginal
                },
                {
                    name: "XML",
                    icon: XmlOriginal
                },
                {
                    name: "YAML",
                    icon: YamlOriginal
                }
            ]
        },
        {
            name: "Android",
            icon: AndroidOriginal
        },
        {
            name: "Chrome Extension",
            icon: ChromeOriginal
        },
        {
            name: "Cmake",
            icon: CmakeOriginal
        },
        {
            name: "Docker",
            icon: DockerOriginal
        },
        {
            name: "Eslint",
            icon: EslintOriginal
        },
        {
            name: "Figma",
            icon: FigmaOriginal
        },
        {
            name: "Gradle",
            icon: GradleOriginal
        },
        {
            name: "Jira",
            icon: JiraOriginal
        },
        {
            name: "Notion",
            icon: NotionOriginal
        },
        {
            name: "Nuget",
            icon: NugetOriginal
        },
        {
            name: "Polygon Blockchain",
            icon: PolygonOriginal
        },
        {
            name: "Postman",
            icon: PostmanOriginal
        },
        {
            name: "Ssh",
            icon: SshOriginal
        }
    ],
    frameworks: [
        {
            name: "React",
            icon: ReactOriginal
        },
        {
            name: "React Native"
        },
        {
            name: "WPF"
        },
        {
            name: "PySide6"
        },
        {
            name: "Node",
            icon: NodejsOriginal
        },
        {
            name: "Express",
            icon: ExpressOriginal
        },
        {
            name: "Next",
            icon: NextjsOriginal
        },
        {
            name: "Hardhat",
            icon: HardhatOriginal
        },
        {
            name: "Chai Testing"
        },
        {
            name: "Django",
            icon: DjangoPlain
        },
        {
            name: "Flask",
            icon: FlaskOriginal
        },
        {
            name: "Framer Motion",
            icon: FramermotionOriginal
        },
        {
            name: "Qt",
            icon: QtOriginal
        },
        {
            name: "Tailwind CSS",
            icon: TailwindcssOriginal
        }
    ]
};

export const fzk = {
    paragraphs: [
        `Fzk is an fzf-like TUI application that makes killing pesky applications a breeze.`,
        `Conditional compilation for Windows, MacOS, and Linux makes it portable.`,
        `You can match on process name or PID to make it easier to find.`
     ],
     links: [
        {
            href: "https://github.com/calebkornegay/fzk",
            target: "_blank",
            rel: "noreferrer",
            icon: FaGithub,
            icon_color: '#000'
        },
        {
            href: "https://crates.io/crates/fzk",
            target: "_blank",
            rel: "noreferrer",
            icon: FaRust,
            icon_color: '#000'
        }
     ]
} as const;

export const openticket = {
    paragraphs: [
        `OpenTicket is a first-class replacement for TicketMaster and StubHub.`,
        `Its services offer ticket creation, listing, purchase, and
          peer-to-peer transfer with future work including a ticket marketplace
          and memorabilia.`,
        `It enforces single-sale tickets and denies the ability to price gouge
          when reselling.`
    ],
    links: [
        {
            href: "https://github.com/OpenTix/platform",
            target: "_blank",
            rel: "noreferrer",
            icon: FaGithub,
            icon_color: '#000'
        },
        {
            href: "https://github.com/OpenTix/eth-contracts",
            target: "_blank",
            rel: "noreferrer",
            icon: FaGithub,
            icon_color: '#000'
        }
    ],
    image_alt: "blockchain event ticketing",
    images: {
        user_web: [
            "/senior_design/user_home_1.png",
            "/senior_design/user_home_2.png",
            "/senior_design/user_home_3.png",
            "/senior_design/user_profile_tickets.png",
            "/senior_design/user_profile_ticket_transfer.png"
        ],
        vendor_web: [
            "/senior_design/vendor_events.png",
            "/senior_design/vendor_venues.png",
            "/senior_design/vendor_event_history.png",
            "/senior_design/vendor_profile.png"
        ],
        user_mobile: [
            "/senior_design/user_mobile_details.jpg",
            "/senior_design/user_mobile_tickets.jpg"
        ],
        vendor_mobile: [
            "/senior_design/vendor_mobile_venues.jpg",
            "/senior_design/vendor_mobile_events.jpg",
            "/senior_design/vendor_mobile_details.jpg"
        ]
    }
} as const;

export const rdiff = {
    paragraphs: [
        `Rdiff is a terminal user interface (TUI) for viewing the differences
          between 2 files.`,
        `It supports syntax highlighting of many languages by leveraging the
          Syntect crate.`,
        `It is written completely in Rust, view the source code below!`
    ],
    links: [
        {
            href: "https://github.com/calebkornegay/rdiff",
            target: "_blank",
            rel: "noreferrer",
            icon: FaGithub,
            icon_color: '#000'
        },
        {
            href: "https://crates.io/crates/rdiff3",
            target: "_blank",
            rel: "noreferrer",
            icon: FaRust,
            icon_color: '#000'
        }
    ]
} as const;

export const Margin = styled.div`
  margin-top: 6rem;
`;
