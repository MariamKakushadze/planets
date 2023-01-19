import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import GlobalCss from "../global.css";
import Header from "../components/header";
import BurgerMenu from "../components/burgerMenu";
import Planet from "./planet";

export default function PlanetPage() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <Wrapper>
        <GlobalCss />
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen ? <BurgerMenu /> : <Planet />}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 16px 24px 46px 24px;
`;
