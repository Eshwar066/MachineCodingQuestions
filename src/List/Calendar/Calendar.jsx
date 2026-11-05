import { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // First day of current month
  const firstDay = new Date(year, month, 1).getDay();

  console.log(">>firstDay", firstDay);

  // Number of days in current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  console.log(">>daysInMonth", daysInMonth);
  const days = [];

  // Empty cells before the first day
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Actual days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };
  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };


  return (
    <div style={{ width: "300px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <button onClick={previousMonth}>{"<"}</button>

        <h3>
          {currentDate.toLocaleString("default", {
            month: "long",
          })}{" "}
          {year}
        </h3>

        <button onClick={nextMonth}>{">"}</button>
      </div>

      {/* Week days */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "5px",
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <strong key={day}>{day}</strong>
        ))}

        {/* Calendar dates */}
        {days.map((day, index) => (
          <div
            key={index}
            onClick={() => day && console.log("Selected:", day)}
            style={{
              padding: "10px",
              textAlign: "center",
              cursor: day ? "pointer" : "default",
            }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
