import { BiLogoTypescript } from "react-icons/bi";
import SectionTitle from "../Shared/SectionTitle";
import SkillCard from "./SkillCard";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCypress, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { IconType } from "react-icons";
type Skills = {
  title: string;
  subTitle: string;
  icon: IconType;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
};
const ExpertiseSkills = () => {
  const allSkills: Skills[] = [
    {
      title: "Tailwind CSS",
      subTitle: "CSS Framework",
      icon: RiTailwindCssFill,
      rating: 4,
    },
    {
      title: "JavaScript (ES6)",
      subTitle: "Language",
      icon: RiJavascriptFill,
      rating: 3,
    },
    {
      title: "TypeScript",
      subTitle: "Language",
      icon: BiLogoTypescript,
      rating: 2,
    },
    {
      title: "React JS",
      subTitle: "JavaScript Lib...",
      icon: FaReact,
      rating: 4,
    },
    {
      title: "React Native",
      subTitle: "UI Framework",
      icon: FaReact,
      rating: 3,
    },
    {
      title: "Node JS",
      subTitle: "JavaScript Run...",
      icon: FaNodeJs,
      rating: 2,
    },
    {
      title: "Express JS",
      subTitle: "Node JS Fram...",
      icon: SiExpress,
      rating: 2,
    },
    {
      title: "MongoDB",
      subTitle: "NoSQL Datab...",
      icon: SiMongodb,
      rating: 2,
    },
    {
      title: "Postman",
      subTitle: "API Testing Tool",
      icon: SiPostman,
      rating: 4,
    },
    {
      title: "Cypress",
      subTitle: "E2E Testing Fra...",
      icon: SiCypress,
      rating: 3,
    },
  ];
  return (
    <div>
      <SectionTitle backgroundTitle="expertise" title="skills" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12">
        {allSkills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            subTitle={skill.subTitle}
            icon={skill.icon}
            rating={skill.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSkills;
