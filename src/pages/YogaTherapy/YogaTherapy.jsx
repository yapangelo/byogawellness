import "./YogaTherapy.scss";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";

const YogaTherapy = () => {
  return (
    <div className="therapy">
      <section className="therapy__hero">
        <h2 className="therapy__hero-title">THERAPEUTIC YOGA</h2>
        <TextBox
          className={"textbox therapy__hero-text"}
          paragraphs={[
            "Therapeutic yoga is a comprehensive and holistic approach to healing that blends modern science and the wisdom of yoga to support overall well-being. It draws on a variety of tools like the Integrated Systems Model, asanas (poses), movement, pranayama (breath work), meditation, mindfulness practices, tailored to your unique needs to foster physical, mental, emotional, and spiritual balance.",
            "Whether you are seeking to manage pain, recover from an injury, enhance strength and mobility, reduce stress, therapeutic yoga offers a personalized and integrative path toward better health and help restore harmony within your mind and body.",
          ]}
        />
      </section>

      <section className="therapy__copy">
        <p className="therapy__copy-heading">
          I specialize in yoga therapy for:
        </p>
        <ul className="therapy__copy-list">
          <li>Stress management & nervous system regulation</li>
          <li>Enhancing balance, strength, & mobility</li>
          <li>Pain management & relief</li>
          <li>Embodiment practices</li>
          <li>Tailored support for seniors</li>
        </ul>

        <p className="therapy__copy-heading">Modalities include:</p>
        <ul className="therapy__copy-list">
          <li>Yoga Postures & Intentional Movements</li>
          <li>Breathing Exercises & Guided Meditation</li>
          <li>Mindfulness Practices</li>
          <li>Chair & Adaptive Yoga</li>
          <li>Myofascial Release</li>
          <li>Integrated Systems Model (ISM)</li>
          <li>Reiki</li>
        </ul>

        <p className="therapy__copy-paragraph">
          With over fourteen years of practice and teaching experience, exposure
          to various styles of yoga, and an appreciation for the unique beauty
          of diverse bodies, combined with a background in nutrition and
          wellness coaching, I am deeply passionate about supporting you on your
          healing journey. My therapeutic classes encourage inquiry and
          exploration, offering a supportive, grounding, and empowering
          experience. I believe that the mind-body-spirit connection is key to
          cultivating a peaceful, mindful, and fulfilling life.
        </p>
      </section>

      <section className="therapy__booking">
        <h1 className="therapy__booking-title">BOOK A YOGA THERAPY CLASS</h1>
        <div className="therapy__booking-container">
          <h2 className="therapy__booking-location">LOCAL HEALTH CLINIC</h2>
          <p className="therapy__booking-info">
            Mondays and Wednesdays, 11:00-3:30PM
          </p>
          <a
            href="https://localhealth.janeapp.com/locations/local-health-integrative-clinic/book#/staff_member/162/bio"
            className="therapy__booking-link"
            target="_blank"
          >
            <Button
              text={"Book Here"}
              className="button--primary therapy__booking-button"
            />
          </a>
        </div>
      </section>

      <section className="therapy__copy">
        <p className="therapy__copy-paragraph">
          Each session is customized for you. Together, we will explore specific
          postures, intentional movement, breathing exercises,  mindfulness
          practices, and various therapeutic tools to address your physical,
          mental, and emotional health concerns. Our personalized sessions may
          include a thorough physical assessment, goal setting, and adjustments
          based on your feedback and progress. The emphasis is on creating a
          holistic and individualized approach to promote well-being.
        </p>
        <p className="therapy__copy-paragraph">
          I provide a trauma-informed, safe, and supportive space that allows
          you to be at ease. All props are provided for your convenience.
        </p>
      </section>
    </div>
  );
};
export default YogaTherapy;
