import "./YogaTherapy.scss";
import TextBox from "../../components/TextBox/TextBox";

const YogaTherapy = () => {
  return (
    <div className="therapy">
      <h2 className="therapy__hero-title">THERAPEUTIC YOGA</h2>
      <TextBox
        className={"textbox therapy__hero-text"}
        paragraphs={[
          "Therapeutic yoga is a comprehensive and holistic approach to healing that blends modern science and the wisdom of yoga to support overall well-being. It draws on a variety of tools like the Integrated Systems Model, asanas (poses), movement, pranayama (breath work), meditation, mindfulness practices, tailored to your unique needs to foster physical, mental, emotional, and spiritual balance.",
          "Whether you are seeking to manage pain, recover from an injury, enhance strength and mobility, reduce stress, therapeutic yoga offers a personalized and integrative path toward better health and help restore harmony within your mind and body.",
        ]}
      />
    </div>
  );
};
export default YogaTherapy;
