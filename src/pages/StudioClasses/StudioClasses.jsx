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
        <h2 className="studioclasses__schedule-title">STUDIO CLASS SCHEDULE</h2>
        <table className="studioclasses__schedule-table">
          <tbody>
            {classScheduleData.map((classItem, index) => (
              <tr className="studioclasses__schedule-row" key={index}>
                <td className="studioclasses__schedule-date">
                  <p className="studioclasses__schedule-day">{classItem.day}</p>
                </td>
                <td className="studioclasses__schedule-details">
                  {classItem.details.map((detail, idx) => (
                    <div
                      className="studioclasses__schedule-details-container"
                      key={idx}
                    >
                      <p className="studioclasses__schedule-time">
                        {detail.time}
                      </p>
                      <p className="studioclasses__schedule-location">
                        {detail.location}
                      </p>
                    </div>
                  ))}
                </td>
                <td>
                  <Button text="Book Now" className="button--primary" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default StudioClasses;
