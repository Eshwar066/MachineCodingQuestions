import { useFetch } from "./usefetch";
import { useEffect } from "react";
const user = () => {
  // const data = useFetch("https://jsonplaceholder.typicode.com/users");
  // console.log(">>data", data?.[0]?.company?.name);

  async function fetchapi() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    console.log(">>result", result);
  }
  useEffect(() => {
    fetchapi();
  }, []);

  // ${data?.[0]?.company?.name}
  return (
    <>
      <div>
        {`usefetch hook 
        
      `}
      </div>
    </>
  );
};
export default user;
