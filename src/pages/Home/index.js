import { useState, useEffect } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [a, setA] = useState(100);
  const [data, setData] = useState([]);

  useEffect(() => {
    // 綁定的事情
    return () => {
      // 取消綁定
    };
    window.alert("新增成功");
  }, [data]);

  function plus() {
    setA(function (prev) {
      return prev + 200;
    });
  }

  return (
    <div className="app">
      {a}
      <button onClick={plus}>加法</button>
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
