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
    <>
      {planet && <PlanetsNav planet={planet} />}
      {planet && <Main planet={planet} />}
      {planet && <Footer planet={planet} />}
    </>
  );
}
