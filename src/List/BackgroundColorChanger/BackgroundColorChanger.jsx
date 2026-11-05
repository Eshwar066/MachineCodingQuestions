import { useState } from "react";

function BackgroundColorChanger() {
  const [color, setColor] = useState("white");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        padding: "40px",
      }}
    >
      <h1>Background Color Changer</h1>

      <button onClick={() => changeColor("red")}>
        Red
      </button>

      <button onClick={() => changeColor("blue")}>
        Blue
      </button>

      <button onClick={() => changeColor("green")}>
        Green
      </button>

      <button onClick={() => changeColor("yellow")}>
        Yellow
      </button>

      <button onClick={() => changeColor("white")}>
        Reset
      </button>
    </div>
  );
}

export default BackgroundColorChanger;