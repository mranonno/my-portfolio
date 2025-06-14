import profileImage from "../../assets/images/AnonnoDas.jpg";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import SocialLink from "../Shared/SocialLink";
const IntroduceMySelf = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center px-16">
      <div className="font-poppins flex-[0.75]">
        <h3 className="font-medium text-lg mb-2">Welcome! I'm</h3>
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 to-blue-700 inline-block">
          ANONNO
        </h1>
        <h2 className="text-2xl font-semibold mr-5 mt-8">
          I build web & mobile apps!
        </h2>
        <h3>
          I'm a software developer based in Bangladesh. Specializing in
          cutting-edge web and mobile technologies as well as pixel-perfect
          design.
        </h3>
        <div className="mt-8 flex">
          <a
            href="/public/assets/Anonno_Das.pdf"
            download
            className="flex items-center gap-2 py-3 px-4 border border-fuchsia-700 rounded-l-full uppercase text-fuchsia-700"
          >
            <MdOutlineFileDownload size={20} />
            Resume
          </a>

          <a
            href="/public/assets/Anonno_Das.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3 px-4 border border-fuchsia-700 rounded-r-full uppercase text-fuchsia-700 border-l-0"
          >
            <IoEye size={20} />
            Resume
          </a>
        </div>
        <SocialLink />
      </div>
      <div className="rotate-6 relative hover:scale-95 transition duration-1000 mr-24">
        <div className="w-44 h-52 overflow-hidden rounded-md z-20 relative border-2 border-fuchsia-700">
          <img src={profileImage} />
        </div>
        <div className="w-44 h-52 absolute z-10 left-4 top-4 border-2 rounded-md" />
      </div>
    </div>
  );
};

export default IntroduceMySelf;
