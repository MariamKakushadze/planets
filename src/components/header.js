import styled from "styled-components";
import burgerIcon from "../assets/icon-hamburger.svg";
import { NavLink as Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <H1>THE PLANETS</H1>
        <Navlink to="/menu">
          <BurgerMenuIcon />
        </Navlink>
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
`;
const H1 = styled.h1`
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  color: #ffffff;
  margin: 0;
`;

const Navlink = styled(Link)`
  text-decoration: none;
  margin: 0;
  cursor: pointer;
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
`;
