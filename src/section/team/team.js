const Team = () => {
  return (
    <section class="schedule">
      <h1>GRAFIK</h1>

      <table class="day">
        <thead class="day-name">
          <tr>
            <th colspan="3"></th>
          </tr>
        </thead>
        <tbody class="details">
          <tr>
            <td class="hour"></td>
            <td class="workout"></td>
            <td class="sch-instructor"></td>
          </tr>
        </tbody>
      </table>

      <div class="schedule-info">
        <p>
          Beginners - poziom początkujący. <br /> Advanced - poziom
          zaawansowany. <br /> Open - zajęcia dla osób, na każdym poziomie
          umiejętności
        </p>
      </div>
    </section>
  );
};
export default Team;
