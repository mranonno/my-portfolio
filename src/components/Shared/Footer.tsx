import { Link } from "react-router-dom";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <div className="mt-12">
      <div className="border mb-4" />
      <div className="flex justify-between">
        <div className="flex-[0.5]">
          <div></div>
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
            <h3>Explore</h3>
            <Link to={"/projects"}>Project</Link>
            <Link to={"/articles"}>Articles</Link>
            <Link>Snippets</Link>
            <Link>Workspace</Link>
          </div>
          <div className="flex flex-col gap-5">
            <h3>About</h3>
            <Link to={"/about"}>About</Link>
            <Link>Today</Link>
            <Link>Resume</Link>
          </div>
        </div>
      </div>
      <div className="border my-4" />
      <div className="text-center">
        <h3>Designed & Developed by Anonno</h3>
        <p>Copyright © 2023 - All right reserved by Anonno</p>
      </div>
    </div>
  );
};

export default Footer;
