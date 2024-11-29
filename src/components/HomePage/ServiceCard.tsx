import { FC } from "react";
import { IconType } from "react-icons";
interface ServiceCardProps {
  title: string;
  subTitle: string;
  icon: IconType;
  rotate?: "left" | "right";
}
const ServiceCard: FC<ServiceCardProps> = ({
  title,
  subTitle,
  icon: Icon,
  rotate,
}) => {
  return (
    <div className="border rounded-xl px-6 py-8 flex justify-between gap-6">
      <div>
        <Icon
          className={`text-gray-300 ${
            rotate === "left"
              ? "-rotate-45"
              : rotate === "right"
              ? "rotate-45"
              : "rotate-0"
          }`}
          size={56}
        />
      </div>
      <div className="mt-4 text-right">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-500 mt-1">{subTitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
