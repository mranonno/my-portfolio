import { Helmet } from "react-helmet-async";
import ExpertiseSkills from "../components/HomePage/ExpertiseSkills";
import FeaturedProjects from "../components/HomePage/FeaturedProjects";
import IntroduceMySelf from "../components/HomePage/IntroduceMySelf";
import Services from "../components/HomePage/Services";

const Home = () => {
  return (
    <div className="mt-24">
      <Helmet>
        <title>Anonno | Home</title>
      </Helmet>
      <IntroduceMySelf />
      <ExpertiseSkills />
      <FeaturedProjects />
      <Services />
    </div>
  );
};

export default Home;
