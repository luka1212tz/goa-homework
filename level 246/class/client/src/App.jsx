import { useEffect, useState } from "react";

//import API_URL from "./api";
//import SuperbaseComponent from "./components/SuperbaseComponet";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const URL = "http://localhost:8000" + "/orders/";
    const featch = async () => {
      const resp = await fetch(URL, {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });
      const data = await resp.json();
      setData(data);
      console.log(data);
    };
    featch();
  }, []);
  return (
    <>
      <div>
         {data?.map((item, index) => (
          <div key={index}>{item?.order_date}</div>
        ))}
       
      </div>
    </>
  );
}

export default App;