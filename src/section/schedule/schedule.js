import React from "react";
import "./schedule.css";
import dance from "../../assets/main/photo.jpeg";
import ContactForm from "../form/form";

const Schedule = ({ items }) => {
  return (
    <>
      <ContactForm />
      <img src={dance} alt="Main" className="dance-photo" />
      <section className="schedule">
        <h1>GRAFIK</h1>
        {Object.keys(items).map((day, index) => (
          <table className="day" key={index}>
            <thead className="day-name">
              <tr>
                <th colSpan="3">{day}</th>
              </tr>
            </thead>
            <tbody className="details">
              {items[day].map((item, idx) => (
                <tr key={idx}>
                  <td className="hour">{item.time}</td>
                  <td className="workout">{item.class}</td>
                  <td className="sch-instructor">{item.instructor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
        <div className="schedule-info">
          <p>
            Beginners - poziom początkujący. <br /> Advanced - poziom
            zaawansowany. <br /> Open - zajęcia dla osób, na każdym poziomie
            umiejętności
          </p>
        </div>
      </section>
    </>
  );
};

export default Schedule;
