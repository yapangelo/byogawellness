import "./Home.scss";
import HeroSliderMobile from "../../components/HeroSliderMobile/HeroSliderMobile";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div className="home">
      <HeroSliderMobile />
      <div className="home__hero">
        <h1 className="home__tagline">WHERE MOVEMENT MEETS MINDFULNESS</h1>
        <Button text="Start Your Journey" className="button--primary" />
      </div>
      <section className="home__intro">
        <div className="home__intro-text-container">
          <h1 className="home__intro-greeting1">Hi There!</h1>
          <h1 className="home__intro-greeting2">I'm Bernadette</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
