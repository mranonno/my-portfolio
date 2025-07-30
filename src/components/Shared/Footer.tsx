import { Link } from "react-router-dom";
import SocialLink from "./SocialLink";
import logoImg from "../../assets/logo/logo_anonno.png";

const Footer = () => {
  return (
    <div className="mt-12">
      <div className="border mb-8" />
      <div className="flex items-center pb-4 gap-24">
        <div className="flex-[0.7]">
          <div className="size-12">
            <img src={logoImg} alt="Logo" />
          </div>
          <p className="text-justify">
            Self-driven focused, and dedicated Software Develop with 1+ years of
            experience, including 6+ month of industrial experience. I am
            passionate about programming, developing new products, and exploring
            new technologies. Well-versed in modern web technologies and version
            control system. Slow-paced learner, a good team player, and
            committed to achieving the goal. Determined to deliver quality with
            an emphasis on excellence.{" "}
          </p>
          <SocialLink />
        </div>
        <div className="flex gap-24 pr-16">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-medium text-gray-900">Explore</h3>
            <Link to={"/projects"}>Project</Link>
            <Link to={"/articles"}>Articles</Link>
            <Link to={""}>Snippets</Link>
            <Link to={""}>Workspace</Link>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-medium text-gray-900">About</h3>
            <Link to={"/about"}>About</Link>
            <Link to={""}>Today</Link>
            <Link to={""}>Resume</Link>
          </div>
        </div>
      </div>
      <div className="border my-8" />
      <div className="text-center space-y-2 pb-8">
        <h3>Designed & Developed by Anonno</h3>
        <p>Copyright © 2024 - All right reserved by Anonno</p>
      </div>
    </div>
  );
};

export default Footer;
