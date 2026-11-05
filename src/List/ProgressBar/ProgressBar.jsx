
import { useEffect, useState } from "react";
import "./ProgressBar.css"

function ProgressBar({ speed = 10 }) {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || progress >= 100) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + speed >= 100) {
          setIsRunning(false);
          return 100;
        }

        return prev + speed;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, progress, speed]);

  const handleStart = () => {
    if (progress < 100) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="progress-container">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p>{progress}%</p>

      <button onClick={handleStart} disabled={isRunning || progress === 100}>
        Start
      </button>

      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}

export default ProgressBar;
