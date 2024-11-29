import ExpertiseSkills from "../components/HomePage/ExpertiseSkills";
import FeaturedProjects from "../components/HomePage/FeaturedProjects";
import IntroduceMySelf from "../components/HomePage/IntroduceMySelf";
import Services from "../components/HomePage/Services";

const Home = () => {
  return (
    <div className="mt-24">
      <IntroduceMySelf />
      <ExpertiseSkills />
      <FeaturedProjects />
      <Services />
    </div>
  );
};

export default Home;
