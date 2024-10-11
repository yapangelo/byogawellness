import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="contact__title">CONTACT</h1>
      </div>
      <div className="contact__text">
        <h2 className="contact__text-greeting">
          So grateful you’re here! I would love to partner with you in your
          health and wellness journey!
        </h2>
        <h1 className="contact__text-tagline">Move. Nourish. Heal.</h1>
        <p className="contact__text-email">byogawellness@gmail.com</p>
      </div>
    </>
  );
};

export default Contact;
