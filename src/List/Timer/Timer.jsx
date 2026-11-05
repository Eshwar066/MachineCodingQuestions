import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => setRunning(false)}>
        Stop
      </button>

      <button
        onClick={() => {
          setCounter(0);
          setRunning(true);
        }} 
      >
        Restart
      </button>

      <h2>{counter}</h2>
    </div>
  );
}