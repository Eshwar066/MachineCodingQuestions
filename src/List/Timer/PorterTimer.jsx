
import { useEffect, useState } from "react";

function CountdownTimer({ initialTime = 60 }) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  // Start countdown
  useEffect(() => {
    if (!isRunning || time === 0) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, time]);

  // Pause
  const handlePause = () => {
    setIsRunning(false);
  };

  // Start / Resume
  const handleStart = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  // Reset
  const handleReset = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  // Format seconds into MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>{formatTime(time)}</h2>
      {/* <h2>{time}</h2> */}

      <button onClick={handleStart} disabled={isRunning || time === 0}>
        Start
      </button>

      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default CountdownTimer;
