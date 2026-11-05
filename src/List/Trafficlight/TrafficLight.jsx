
import { useEffect, useState } from "react";
import "./TrafficLight.css";

const TRAFFIC_LIGHT_CONFIG = [
  { id: "red", color: "red", duration: 4000 },
  { id: "green", color: "green", duration: 3000 },
  { id: "yellow", color: "yellow", duration: 1000 },
];

function TrafficLight({ phases = TRAFFIC_LIGHT_CONFIG }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [runing,setRuning]= useState(true);

  useEffect(() => {
    if(!runing) return;
    const currentPhase = phases[activeIndex];

    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % phases.length);
    }, currentPhase.duration);

    return () => clearTimeout(timer);
  }, [activeIndex, phases,runing]);

  const handleStop=()=>{
    if(runing){
        setRuning(false)
    }
  }
  const handleResume=()=>{
    if(!runing){
        setRuning(true)
    }
}

  return (
    <>
    <div className="traffic-light">
      {phases.map((phase, index) => (
        <div
          key={phase.id}
          className={`light ${phase.color} ${
            activeIndex === index ? "active" : ""
          }`}
        />
      ))}
    </div>
    
    <button onClick={handleStop}>stop</button>
    <button onClick={handleResume}>resume</button>
    
    </>
  );
}

export default TrafficLight;
