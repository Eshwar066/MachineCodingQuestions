import { useState } from "react";

const items = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    title: "What is useState?",
    content: "useState is a React Hook used to manage state in a component.",
  },
  {
    id: 3,
    title: "What is useEffect?",
    content: "useEffect is used to perform side effects in React components.",
  },
];

function Accordion() {
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <button onClick={() => handleClick(item.id)}>{item.title}</button>

          {openId === item.id && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
