import { useState } from "react";
const items = [
  {
    id: 1,
    question: "what is react",
    answer: "react is used build frontend ui",
  },
  { id: 2, question: "what is state", answer: "state is used to store data" },
  {
    id: 3,
    question: "what is useeffect",
    answer: "useeffect is used to run side effects of browser",
  },
];
function AccordianTest() {
  const [openId, setOpenId] = useState([]);
  //   const handleClick = (id) => {
  //     setOpenId((prevItem) => (id === prevItem ? null : id));
  //   };

  //multiple accordian
  const handleClick = (id) => {
    setOpenId((prevItem) => {
      if (prevItem.includes(id)) {
        return prevItem.filter((item) => item !== id);
      }
      return [...prevItem, id];
    });
  };
  return (
    <div>
      Accordian
      {items?.map((item) => (
        <div key={item.id}>
          <button onClick={() => handleClick(item?.id)}>{item.question}</button>
          {openId.includes(item.id) && <div>{item?.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default AccordianTest;
