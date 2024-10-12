import "./WellnessCoaching.scss";

const WellnessCoaching = () => {
  return (
    <>
      <div className="coaching">
        <h1 className="coaching__title">WELLNESS COACHING</h1>
      </div>
      <section className="coaching__copy">
        <p className="coaching__copy-paragraph">
          When it comes to wellness, so many questions and doubts cloud our
          minds about failed diets, what eating “healthy” really means,
          practicing consistency, and even where to begin.{" "}
          <strong> In my sessions, I will help you do the following:</strong>
        </p>

        <ul className="coaching__copy-list">
          <li>Stress management & nervous system regulation</li>
          <li>Enhancing balance, strength, & mobility</li>
          <li>Pain management & relief</li>
          <li>Embodiment practices</li>
          <li>Tailored support for seniors</li>
        </ul>

        <p className="coaching__quote">
          “Part of my wellness coaching is holistic nutrition with a focus on
          gut health and a plant-based diet. We look into your current health
          state, what you want to achieve, and then I proceed to providing
          dietary, supplementary, and lifestyle recommendations.”
        </p>
      </section>

      <h2 className="coaching__bundles-title">WELLNESS BUNDLES</h2>

      <section className="coaching__bundles">
        <p className="coaching__bundles-desc">
          Each session can include a combination of movement-based practices
          such as yoga, nutrition consultation, and personalized coaching.
        </p>

        <div className="coaching__bundles-container">
          <p className="coaching__bundles-name">Discovery Call</p>
          <p className="coaching__bundles-duration">15 minutes</p>
          <p className="coaching__bundles-description">
            During a free 15-minute call, we discuss your needs, see if we’re a
            good fit, and determine how to move forward.
          </p>
        </div>

        <div className="coaching__bundles-container">
          <p className="coaching__bundles-name">The Exploration</p>
          <p className="coaching__bundles-duration">1.5 months / 3 sessions</p>
          <p className="coaching__bundles-description">
            This will allow you to dip your toes into rediscovering yourself,
            your needs, and your goals.
          </p>
        </div>

        <div className="coaching__bundles-container">
          <p className="coaching__bundles-name">The Deep Dive</p>
          <p className="coaching__bundles-duration">5 months / 6 sessions</p>
          <p className="coaching__bundles-description">
            If you want to go beyond the surface and harness a holistic approach
            to your health and wellness journey, this one’s for you.
          </p>
        </div>

        <div className="coaching__bundles-container">
          <p className="coaching__bundles-name">The Journey</p>
          <p className="coaching__bundles-duration">1 year / 12 sessions</p>
          <p className="coaching__bundles-description">
            They say consistency is key. More sessions will help you maintain
            that much needed consistency that will keep you aligned with your
            core truth, which will guide you in living an intentional and
            mindful life.
          </p>
        </div>
      </section>
    </>
  );
};
export default WellnessCoaching;
