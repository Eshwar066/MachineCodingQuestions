import React, { useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);

  const startTimeRef = useRef(0);
  const elapsedRef = useRef(0);
  const animationRef = useRef(null);
  const runningRef = useRef(false);

  // Start timer
  const start = () => {
    if (runningRef.current) return;

    runningRef.current = true;
    startTimeRef.current = performance.now();

    const tick = (now) => {
      if (!runningRef.current) return;

      const currentTime =
        elapsedRef.current + (now - startTimeRef.current);

      setTime(currentTime);

      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);
  };

  // Stop timer
  const stop = () => {
    if (!runningRef.current) return;

    runningRef.current = false;

    cancelAnimationFrame(animationRef.current);

    elapsedRef.current +=
      performance.now() - startTimeRef.current;
  };

  // Reset timer
  const reset = () => {
    runningRef.current = false;

    cancelAnimationFrame(animationRef.current);

    elapsedRef.current = 0;
    startTimeRef.current = 0;

    setTime(0);
  };

  // Format milliseconds
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}:${String(centiseconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;