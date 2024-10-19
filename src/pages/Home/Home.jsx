import "./Home.scss";
import HeroSliderMobile from "../../components/HeroSliderMobile/HeroSliderMobile";
import HeroSliderDesktop from "../../components/HeroSliderDesktop/HeroSliderDesktop";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import TextBox from "../../components/TextBox/TextBox";
import { useState, useEffect } from "react";
import PropsPopup from "../../components/PropsPopup/PropsPopup";
import {
  credentialsData,
  yogaEducationData,
  careerHighlightsData,
} from "../../scripts/props-data";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1279);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1279);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [visiblePopup, setVisiblePopup] = useState(null);

  const handleOpenPopup = (popupType) => {
    setVisiblePopup(popupType);
  };

  const handleClosePopup = () => {
    setVisiblePopup(null);
  };

  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-text-container">
          <h1 className="home__hero-tagline">
            WHERE MOVEMENT MEETS MINDFULNESS
          </h1>
          <Link to={"/services"}>
            <Button text="Start Your Journey" className="button--primary" />
          </Link>
        </div>
        {isMobile ? (
          <HeroSliderMobile className="home__hero-background" />
        ) : (
          <HeroSliderDesktop />
        )}
      </section>

      <section className="home__intro">
        <div className="home__intro-text-container">
          <h1 className="home__intro-greeting1">Hi There!</h1>
          <h1 className="home__intro-greeting2">I'm Bernadette</h1>
          <TextBox
            className={"textbox home__intro-textbox"}
            paragraphs={[
              "I'm a passionate 500-hour yoga teacher, holistic nutritionist, and wellness coach.",
              "Through yoga, I found mindfulness and improved my eating habits, inspiring me to become a nutritionist. My journey led me to embrace a plant-based diet for health, animals, and the planet.",
              "As a Yoga Therapist C-AIYT candidate, I'm equipped to support your healing journey. I strive to serve by sharing my knowledge and promoting mindfulness. Join me to discover a mindful lifestyle.",
            ]}
          />
          <Link to={"/about"}>
            <Button
              text="More About Me"
              className="home__intro-button button--primary"
            />
          </Link>
        </div>
      </section>

      <section className="home__creds">
        <div className="home__creds-container">
          <h1
            className="home__creds-item"
            onClick={() => handleOpenPopup("credentials")}
          >
            Credentials
          </h1>
          <h1
            className="home__creds-item"
            onClick={() => handleOpenPopup("yogaEducation")}
          >
            Yoga Education
          </h1>
          <h1
            className="home__creds-item"
            onClick={() => handleOpenPopup("careerHighlights")}
          >
            Career Highlights
          </h1>
        </div>
      </section>

      {visiblePopup === "credentials" && (
        <PropsPopup
          title="Credentials"
          content={credentialsData}
          onClose={handleClosePopup}
        />
      )}

      {visiblePopup === "yogaEducation" && (
        <PropsPopup
          title="Yoga Education"
          content={yogaEducationData}
          onClose={handleClosePopup}
        />
      )}

      {visiblePopup === "careerHighlights" && (
        <PropsPopup
          title="Career Highlights"
          content={careerHighlightsData}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Home;
