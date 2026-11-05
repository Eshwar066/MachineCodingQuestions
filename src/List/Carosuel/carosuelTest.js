import { useRef, useEffect } from "react";
import "./MyCard.css";
const Card = ({ id, number }) => {
  return (
    <div>
      <div className="card">{`card  ${number}`}</div>
    </div>
  );
};
function CarsouselTest() {
  const boxRef = useRef(null);

  const rightbutton = () => {
    const box = boxRef.current;
    if (box) {
      let width = box.clientHeight;
      box.scrollLeft = box.scrollLeft + width;
    }
  };
  const leftbutton = () => {
    const box = boxRef.current;
    if (box) {
      let width = box.clientHeight;
      box.scrollLeft = box.scrollLeft - width;
    }
  };
  useEffect(() => {
    let interval = setInterval(() => {
      rightbutton();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carosuel">
      <button onClick={() => leftbutton()}>left</button>
      <div className="card-main" ref={boxRef}>
        {Array.from({ length: 100 }, (_, key) => (
          <Card id={key} number={key + 1} />
          
        ))}
      </div>
      <button onClick={() => rightbutton()}>right</button>
    </div>
  );
}
export default CarsouselTest;
