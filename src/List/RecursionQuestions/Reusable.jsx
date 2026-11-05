


const chatData = {
  id: "1",
  text: "Hello, I am Abha",
  children: [
    {
      id: "2",
      text: "Hi Abha, I am Bob",
      children: [
        {
          id: "3",
          text: "How are you, Bob?",
          children: [
            {
              id: "4",
              text: "I'm fine, thanks!",
              children: [],
            },
            {
              id: "5",
              text: "But things are very busy.",
              children: [],
            },
            {
              id: "6",
              text: "I have been working on a secret project.",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "7",
      text: "Hello to you, this is Charu.",
      children: [
        {
          id: "8",
          text: "Good to hear from you, Charu",
          children: [],
        },
      ],
    },
  ],
};

export default function Reusabel() {
  const reusable = (data) => {
    return (
      <>
        {data.text}
        {data.children &&
          data.children.map((item, id) => (
            <div key={id} style={{ marginLeft: "20px" }}>
              {reusable(item)}
            </div>
          ))}
      </>
    );
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {reusable(chatData)}
    </div>
  );
}
