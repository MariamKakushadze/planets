import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import Main from "./mainInfo";
import PlanetsNav from "./planetNav";
import Footer from "./footer";

export default function Planet() {
  let { name } = useParams();
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    const planetData = data.find(
      (planet) => planet.name.toLowerCase() === name.toLowerCase()
    );
    console.log(data);
    setPlanet(planetData || {});
  }, [name]);

  return (
    <div style={{ position: "relative" }}>
      <PlanetsNav planet={planet} />
      <Main planet={planet} />
      <Footer planet={planet} />
    </div>
  );
}
