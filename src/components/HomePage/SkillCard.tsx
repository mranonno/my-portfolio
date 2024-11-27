import { RiTailwindCssFill } from "react-icons/ri";

const SkillCard = () => {
  return (
    <div className="flex bg-white py-4 gap-8 px-2 border-2 rounded-2xl ">
      <div className="min-w-12 min-h-12 max-w-12 max-h-12 justify-center items-center flex border-2 rounded-2xl -translate-y-10 translate-x-4 rotate-45 bg-white top-0 relative">
        <RiTailwindCssFill size={24} />
      </div>
      <div className="flex-1">
        <h3 className="text-gray-900 text-lg font-semibold">Tailwind CSS</h3>
        <div className="flex justify-between items-center gap-4">
          <p className="text-gray-500">CSS Framework</p>
          <div className="flex gap-[2px]">
            <div className="border-[3px] border-fuchsia-700 rounded-l-full w-4 h-1"></div>
            <div className="border-[3px] w-4 h-1 border-fuchsia-700 "></div>
            <div className="border-[3px] w-4 h-1 border-fuchsia-700 "></div>
            <div className="border-[3px] w-4 h-1"></div>
            <div className="border-[3px] w-4 h-1 rounded-r-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
