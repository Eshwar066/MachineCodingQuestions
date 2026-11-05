
import { useEffect, useState } from "react";
import "./TrafficLight.css";

const INITIAL_CONFIG = [
  { id: 1, color: "red", duration: 4000 },
  { id: 2, color: "green", duration: 3000 },
  { id: 3, color: "yellow", duration: 1000 },
];

function TrafficLightExtension() {
  const [phases, setPhases] = useState(INITIAL_CONFIG);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const [newColor, setNewColor] = useState("");
  const [newDuration, setNewDuration] = useState("");

  // Timer logic
  useEffect(() => {
    if (!isRunning || phases.length === 0) return;

    const currentPhase = phases[activeIndex];

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % phases.length);
    }, currentPhase.duration);

    return () => clearTimeout(timer);
  }, [activeIndex, phases, isRunning]);

  // Update existing light duration
  const handleDurationChange = (id, value) => {
    setPhases((prev) =>
      prev.map((phase) =>
        phase.id === id
          ? { ...phase, duration: value === "" ? "" : Number(value) * 1000 }
          : phase
      )
    );
  };

  // Add new light
  const handleAddLight = () => {
    const duration = Number(newDuration);

    if (
      !newColor.trim() ||
      newDuration.trim() === "" ||
      !Number.isFinite(duration) ||
      duration <= 0
    ) {
      alert("Enter a valid color and positive duration");
      return;
    }

    const newPhase = {
      id: Date.now(),
      color: newColor.toLowerCase(),
      duration: duration * 1000,
    };

    setPhases((prev) => [...prev, newPhase]);

    setNewColor("");
    setNewDuration("");
  };

  // Remove light
  const handleRemoveLight = (id) => {
    setPhases((prev) => {
      const updated = prev.filter((phase) => phase.id !== id);

      if (updated.length === 0) {
        setActiveIndex(0);
      } else if (prev.findIndex((phase) => phase.id === id) < activeIndex) {
        setActiveIndex((index) => index - 1);
      } else if (activeIndex >= updated.length) {
        setActiveIndex(0);
      }

      return updated;
    });
  };

  return (
    <div>
      <h2>Traffic Light Configuration</h2>

      {/* Existing lights */}
      {phases.map((phase) => (
        <div key={phase.id}>
          <label>{phase.color.toUpperCase()}</label>

          <input
            type="number"
            min="0"
            step="any"
            value={phase.duration === "" ? "" : phase.duration / 1000}
            onChange={(e) =>
              handleDurationChange(phase.id, e.target.value)
            }
          />

          <span> seconds </span>

          <button onClick={() => handleRemoveLight(phase.id)}>
            Remove
          </button>
        </div>
      ))}

      {/* Add new light */}
      <h3>Add New Light</h3>

      <input
        type="text"
        placeholder="Color (e.g. blue)"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />

      <input
        type="number"
        placeholder="Duration in seconds"
        min="0"
        step="any"
        value={newDuration}
        onChange={(e) => setNewDuration(e.target.value)}
      />

      <button onClick={handleAddLight}>Add Light</button>

      {/* Traffic light display */}
      <div className="traffic-light">
        {phases.map((phase, index) => (
          <div
            key={phase.id}
            className={`light ${phase.color}`}
            style={{
              backgroundColor:
                activeIndex === index ? phase.color : "#333",
              opacity: activeIndex === index ? 1 : 0.4,
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <button onClick={() => setIsRunning(false)}>Stop</button>

      <button
        onClick={() => setIsRunning(true)}
        disabled={isRunning || phases.length === 0}
      >
        Resume
      </button>
    </div>
  );
}

export default TrafficLightExtension;
