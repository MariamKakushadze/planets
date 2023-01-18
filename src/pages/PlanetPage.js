import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import Main from "./mainInfo";
import PlanetsNav from "./planetNav";
import styled from "styled-components";
import GlobalCss from "../global.css";
import Header from "../components/header";
import Footer from "./footer";

export default function PlanetPage() {
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
      <Wrapper>
        <GlobalCss />
        <Header />
        {planet && <PlanetsNav planet={planet} />}
        {planet && <Main planet={planet} />}
        {planet && <Footer planet={planet} />}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 16px 24px 46px 24px;
`;
