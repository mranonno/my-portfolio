import { FC } from "react";
import { IconType } from "react-icons";

interface SkillCardProps {
  icon: IconType;
  title: string;
  subTitle: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

const SkillCard: FC<SkillCardProps> = ({
  icon: Icon,
  title,
  subTitle,
  rating,
}) => {
  return (
    <div className="flex items-center bg-white py-6 gap-6 px-2 border rounded-xl group">
      <div className="relative flex justify-center items-center w-11 h-11 border rounded-xl bg-white -translate-y-12 translate-x-3 rotate-45">
        <Icon
          className="group-hover:scale-[120%] transform transition-transform duration-300 -rotate-45"
          size={24}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-gray-900 font-semibold">{title}</h3>
        <div className="flex justify-between items-center gap-4">
          <p className="text-gray-500">{subTitle}</p>
          <div className="flex gap-[2px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`border-[3px] w-3 h-1 ${
                  rating >= i && "border-fuchsia-700"
                } ${i === 1 && "rounded-l-full"} ${
                  i === 5 && "rounded-r-full"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
