import Cards from "../components/home_subsections/Cards";
import Creativity from "../components/home_subsections/Creativity";
import Hero_Section from "../components/home_subsections/Hero_Section";
import Second_Section from "../components/home_subsections/Second_Section";
import Services_Section from "../components/home_subsections/Services_Section";
import Vision from "../components/home_subsections/Vision";

const Home = () => {
  return (
    <div className="bg-[#000000] ">
      <Hero_Section />
      <Second_Section />
      <Services_Section />
      <Creativity />
      <Vision />
      <Cards />
    </div>
  );
};

export default Home;
