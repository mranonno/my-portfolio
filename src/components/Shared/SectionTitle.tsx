import { FC } from "react";
interface SectionProps {
  backgroundTitle: string;
  title: string;
}
const SectionTitle: FC<SectionProps> = ({ backgroundTitle, title }) => {
  return (
    <div className="relative text-center mt-24 mb-16">
      <h1 className="text-9xl font-bold opacity-40 text-gray-400 uppercase">
        {backgroundTitle}
      </h1>
      <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-700 to-fuchsia-700 text-transparent bg-clip-text font-bold text-6xl uppercase">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
