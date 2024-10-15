import "./StudioClasses.scss";
import Button from "../../components/Button/Button";
import { classScheduleData } from "../../scripts/class-schedule-data";

const StudioClasses = () => {
  return (
    <div className="studioclasses">
      <section className="studioclasses__hero">
        <h2 className="studioclasses__hero-title">STUDIO CLASSES</h2>
      </section>

      <section className="studioclasses__copy">
        <p className="studioclasses__copy-paragraph">
          The practice of yoga can be more empowering, energizing, and
          meaningful when shared with like-minded individuals. My studio classes
          are engaging and mindful with an element of play!
        </p>
        <p className="studioclasses__copy-paragraph">
          Let's move, breathe and relax together.
        </p>
      </section>

      <section className="studioclasses__schedule">
        <h2 className="studioclasses__schedule-title">STUDIO CLASSES</h2>
        {classScheduleData.map((classItem, index) => (
          <div className="studioclasses__schedule-table" key={index}>
            <p className="studioclasses__schedule-day">{classItem.day}</p>
            <div className="studioclasses__schedule-container">
              {classItem.details.map((detail, idx) => (
                <>
                  <div className="studioclasses__schedule-details" key={idx}>
                    <div className="studioclasses__details-container">
                      <p className="studioclasses__schedule-time">
                        {detail.time}
                      </p>
                      <p className="studioclasses__schedule-class">
                        {detail.location}
                      </p>
                    </div>
                    <a href={detail.link} target="_blank">
                      <Button
                        text="Book Here"
                        className="button--primary studioclasses__button"
                      />
                    </a>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StudioClasses;
