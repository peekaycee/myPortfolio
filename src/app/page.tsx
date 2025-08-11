import Acomplishments from './components/Acomplishments/Acomplishments';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Timeline from './components/Timeline/Timeline';
const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Technologies/>
      <Acomplishments />
      <Timeline />
    </>
  );
};

export default Home;
