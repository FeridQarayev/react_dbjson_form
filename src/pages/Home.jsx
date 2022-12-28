import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CARD from "../components/CARD/CARD";
import "./style.css";

function Home() {
  const [dataa, setData] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => setData(res.data));
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        {dataa.map((item) => {
          return <CARD key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
