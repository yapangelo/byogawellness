import "./Events.scss";
import Work1 from "../../assets/images/events-release-restore.svg";
import Work2 from "../../assets/images/events-release-restore-reflect.svg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="events">
      <section className="events__hero">
        <h1 className="events__hero-title">EVENTS & WORKSHOPS</h1>
      </section>

      <section className="events__list-section">
        <ul className="events__list">
          <li className="events__list-item">
            <h1 className="events__list-date">Dec 14</h1>
            <div className="events__list-container">
              <img src={Work1} className="events__list-pic" />
              <div className="events__list-text">
                <p className="events__list-copy">
                  Join us for Release & Restore, a deeply rejuvenating workshop
                  designed to ease tension, calm the mind, and revitalize the
                  body. Through gentle restorative yoga and a guided Yoga Nidra
                  session, you’ll be led into a state of profound relaxation and
                  inner peace. Perfect for beginners and seasoned yogis alike,
                  this workshop offers a gentle way to release stress, reconnect
                  with yourself, and find balance. Leave feeling lighter,
                  refreshed, and restored!
                </p>
                <Link
                  to={
                    "https://opendooryoga.bc.ca/workshops/release-and-restore-with-bernadette-december-14/"
                  }
                  target="blank"
                >
                  <Button text="More Info" className="button--primary" />
                </Link>
              </div>
            </div>
          </li>
          <li className="events__list-item">
            <h1 className="events__list-date">Dec 21</h1>
            <div className="events__list-container">
              <img src={Work2} className="events__list-pic" />
              <div className="events__list-text">
                <p className="events__list-copy">
                  Release, Restore, and Reflect is a nurturing restorative yoga
                  workshop paired with guided journaling to close the year with
                  clarity and intention. Through soothing yoga poses, you'll
                  release tension and restore inner calm, followed by reflective
                  journaling to honor 2024 and set purposeful intentions for
                  2025. Take this time to reconnect, recharge, and realign for
                  the year ahead.
                </p>
                <Link
                  to={"https://localyoga.punchpass.com/classes/16450082"}
                  target="blank"
                >
                  <Button text="More Info" className="button--primary" />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Events;
