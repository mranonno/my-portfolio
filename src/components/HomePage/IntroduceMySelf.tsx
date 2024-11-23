import profileImage from "../../assets/images/Anonno Das.jpg";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoEye } from "react-icons/io5";
const IntroduceMySelf = () => {
  return (
    <div className="flex justify-between items-center mt-24 px-16">
      <div className="font-poppins flex-[0.75]">
        <h3 className="font-medium">Welcome! I'm</h3>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-blue-900 text-transparent bg-clip-text">
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
          <button className="flex items-center gap-2 py-3 px-4 border border-fuchsia-400 rounded-l-full uppercase text-fuchsia-500">
            <span>
              <MdOutlineFileDownload size={20} />
            </span>
            resume
          </button>
          <button className="flex items-center gap-2 py-3 text-fuchsia-500 px-4 border rounded-r-full uppercase border-fuchsia-400 border-l-0">
            <span>
              <IoEye size={20} />
            </span>
            resume
          </button>
        </div>
      </div>
      <div className="rotate-6 relative hover:scale-95 transition duration-1000 mr-24">
        <div className="w-44 h-52 overflow-hidden rounded-md z-20 relative border-2 border-fuchsia-800">
          <img src={profileImage} />
        </div>
        <div className="w-44 h-52 absolute z-10 left-4 top-4 border-2 rounded-md" />
      </div>
    </div>
  );
};

export default IntroduceMySelf;
