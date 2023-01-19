import styled from "styled-components";
import burgerIcon from "../assets/icon-hamburger.svg";
import React, { useRef } from "react";
import BurgerMenu from "./burgerMenu";

export default function Header({ isOpen, setIsOpen }) {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <H1>THE PLANETS</H1>
        {windowSize.current[0] < 768 ? (
          <BurgerMenuIcon onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <BurgerMenu />
        )}
        <Menu></Menu>
      </HeaderWrapper>
      <Div></Div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: relative;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const H1 = styled.h1`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  color: #ffffff;
  margin: 0;
`;

const Menu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const BurgerMenuIcon = styled.div`
  background: url(${burgerIcon});
  width: 24px;
  height: 17px;
  margin: 0;
  cursor: pointer;
`;

const Div = styled.div`
  position: absolute;
  left: -24px;
  background: #ffffff;
  mix-blend-mode: normal;
  margin-top: 16px;
  opacity: 0.2;
  width: 100vw;
  height: 1px;
  padding: 0;
  @media (min-width: 768px) {
    left: -40px;
    margin: 0;
    bottom: 20px;
  }
`;
