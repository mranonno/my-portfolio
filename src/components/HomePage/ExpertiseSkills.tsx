import SectionTitle from "../Shared/SectionTitle";
import SkillCard from "./SkillCard";

const ExpertiseSkills = () => {
  return (
    <div className="mt-12">
      <SectionTitle />
      <div className="grid grid-cols-3 gap-x-8 px-12 gap-y-12 my-12">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
};

export default ExpertiseSkills;
