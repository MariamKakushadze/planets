import styled from "styled-components";
import ArrowIcon from "../assets/icon-chevron.svg";
import { NavLink as Link } from "react-router-dom";
export default function BurgerMenu() {
  const menuItems = [
    { color: "#DEF4FC", name: "MERCURY" },
    { color: "#F7CC7F", name: "VENUS" },
    { color: "#545BFE", name: "EARTH" },
    { color: "#FF6A45", name: "MARS" },
    { color: "#ECAD7A", name: "JUPITER" },
    { color: "#FCCB6B", name: "SATURN" },
    { color: "#65F0D5", name: "URANUS" },
    { color: "#497EFA", name: "NEPTUNE" },
  ];
  return (
    <BurgerMenuContainer>
      <Ul>
        {menuItems.map((item, index) => {
          return (
            <Navlink to={`/${item.name}`} key={index}>
              <Circle style={{ backgroundColor: `${item.color}` }} />
              <PlanetName>{item.name}</PlanetName>
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
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin: 0;
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
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin: 0;
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
`;

const Arrow = styled.div`
  width: 4px;
  height: 8px;
  background: url(${ArrowIcon});
  margin-right: 10px;
`;
