import "./PropsPopup.scss";
import close from "../../assets/close.svg";

const Propspopup = ({ title, content, onClose }) => {
  return (
    <div className="prop">
      <img src={close} alt="close" className="prop__close" onClick={onClose} />
      <div className="prop__container">
        <h4 className="prop__title">{title}</h4>
        <div className="prop__content">
          {content.map((item, index) => (
            <div className="prop__texts" key={index}>
              <p className="prop__cred">{item.cred}</p>
              <p className="prop__location">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Propspopup;
