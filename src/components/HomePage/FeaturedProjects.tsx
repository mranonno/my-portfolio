import SectionTitle from "../Shared/SectionTitle";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <div>
      <SectionTitle title="projects" backgroundTitle="featured" />
      <div className="grid grid-cols-2 gap-8">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default FeaturedProjects;
