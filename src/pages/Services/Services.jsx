import "./Services.scss";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
      <section className="services__yoga">
        <div className="services__yoga-container">
          <h1 className="services__yoga-title">YOGA</h1>
          <Link to={"/therapy"} className="services__link">
            <h2 className="services__yoga-types">YOGA THERAPY</h2>
          </Link>
          <Link to={"/training"} className="services__link">
            <h2 className="services__yoga-types">TEACHER TRAINING</h2>
          </Link>
          <Link to={"/classes"} className="services__link">
            <h2 className="services__yoga-types">STUDIO CLASSES</h2>
          </Link>
        </div>
      </section>
      <section className="services__coaching">
        <div className="services__coaching-container">
          <Link to={"/coaching"} className="services__link">
            <h1 className="services__coaching-title">WELLNESS COACHING</h1>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Services;
