import styled from "styled-components";
import ArrowIcon from "../assets/icon-chevron.svg";
import { NavLink as Link } from "react-router-dom";
import menuItems from "../menuData";

export default function BurgerMenu() {
  const handleClick = (event, item) => {
    if (window.innerWidth > 768) {
      window.location.href(`/${item.name.toLowerCase()}`);
    }
  };

  return (
    <BurgerMenuContainer>
      <Ul>
        {menuItems.map((item, index) => {
          return (
            <Navlink
              to={`/${item.name.toLowerCase()}`}
              key={index}
              onClick={(event) => handleClick(event, item)}
            >
              <Circle style={{ backgroundColor: `${item.color}` }} />
              <PlanetName color={item.color}>{item.name}</PlanetName>
              <Arrow />
            </Navlink>
          );
        })}
      </Ul>
    </BurgerMenuContainer>
  );
}

const BurgerMenuContainer = styled.nav`
  margin-top: 44px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 33px;
    justify-content: space-between;
  }
`;
const Navlink = styled(Link)`
  display: flex;
  display: row;
  gap: 25px;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  &:last-child {
    border-bottom: none;
  }
  margin: 0;
  text-decoration: none;
  @media (min-width: 768px) {
    gap: 0;
    border-bottom: none;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin: 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const PlanetName = styled.h3`
  font-family: "Spartan", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.36364px;
  color: #ffffff;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.5);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  @media (min-width: 1440px) {
    padding-top:20px;
    &:hover {
      border-top: 4px solid ${(props) => props.color};
      
  }
`;

const Arrow = styled.div`
  width: 4px;
  height: 8px;
  background: url(${ArrowIcon});
  margin-right: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`;
