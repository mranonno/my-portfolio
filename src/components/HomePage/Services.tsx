import { LuFocus } from "react-icons/lu";
import SectionTitle from "../Shared/SectionTitle";
import ServiceCard from "./ServiceCard";
import { HiOutlineBugAnt } from "react-icons/hi2";
import { BsTerminal } from "react-icons/bs";
import { SlScreenTablet } from "react-icons/sl";
import { SiCypress } from "react-icons/si";

const Services = () => {
  return (
    <div>
      <SectionTitle title="what i do?" backgroundTitle="services" />
      <div className="grid grid-cols-3 gap-8">
        <ServiceCard
          title="Responsive Design"
          subTitle="Creating responsive, pixel-perfect UIs for seamless experiences"
          icon={LuFocus}
          rotate="right"
        />
        <ServiceCard
          title="Web Development"
          subTitle="Building modern web apps with the latest technologies"
          icon={BsTerminal}
          rotate="left"
        />
        <ServiceCard
          title="Mobile App Development"
          subTitle="Creating cross-platform apps with React Native"
          icon={SlScreenTablet}
          rotate="right"
        />
        <ServiceCard
          title="Bug Fixing"
          subTitle="Fixing bugs, redesign UI and improve app performance"
          icon={HiOutlineBugAnt}
          rotate="right"
        />
        <ServiceCard
          title="API Automation"
          subTitle="Effortlessly automate API testing using Cypress for robust validation"
          icon={SiCypress}
          rotate="right"
        />
      </div>
    </div>
  );
};

export default Services;
