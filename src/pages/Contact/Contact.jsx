import "./Contact.scss";
import emailjs from "emailjs-com";
import { useState } from "react";
import Button from "../../components/Button/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "byogawellness_8yw32q7", // Replace with your Service ID
        "template_j3l8bsq", // Replace with your Template ID
        formData,
        "bLjCQXrliXf0Azc-C" // Replace with your Public Key
      )

      .then(
        (result) => {
          alert("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Error sending email");
        }
      );
  };

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

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-field">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>

        <div className="contact__form-field">
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <div className="contact__form-field">
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write message here..."
            required
          />
        </div>

        <Button
          type="submit"
          text="Submit"
          className="button--primary contact__form-button"
        />
      </form>
    </>
  );
};

export default Contact;
