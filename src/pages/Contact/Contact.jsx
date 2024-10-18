import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Button from "../../components/Button/Button";
import React, { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "byogawellness_8yw32q7", // Service ID
        "template_j3l8bsq", // Template ID
        form.current,
        "bLjCQXrliXf0Azc-C" // Public Key
      )
      .then(
        (result) => {
          setPopupMessage("Email sent successfully!"); // Success message
          setPopupType("success"); // Set popup type to success
          setShowPopup(true); // Show the popup

          form.current.reset();
        },
        (error) => {
          setPopupMessage("Failed to send the email. Please try again."); // Error message
          setPopupType("error"); // Set popup type to error
          setShowPopup(true); // Show the popup
        }
      );
  };

  React.useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer); // Clear timer if the component unmounts
    }
  }, [showPopup]);

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

      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="contact__form-name"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="contact__form-email"
        />
        <textarea
          name="message"
          placeholder="Type message here"
          className="contact__form-message"
        />

        <Button
          type="submit"
          text="Submit"
          value="Send"
          className="button--primary contact__form-button"
        />
      </form>

      {/* Popup Notification */}
      {showPopup && (
        <div className={`popup ${popupType}`}>
          <p>{popupMessage}</p>
        </div>
      )}
    </>
  );
};

export default Contact;
