import styled from "styled-components";
import burgerIcon from "../assets/icon-hamburger.svg";
import React from "react";
import BurgerMenu from "./burgerMenu";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <H1>THE PLANETS</H1>
        {window.innerWidth < 768 ? (
          <BurgerMenuIcon onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <BurgerMenu />
        )}
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
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
  }
`;
const H1 = styled.h1`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  color: #ffffff;
  margin: 0;
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
  }
  @media (min-width: 1440px) {
    bottom: -10px;
    left: -2.8%;
    max-width: 1400px;
  }
`;
