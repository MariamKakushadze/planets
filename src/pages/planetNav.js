import styled from "styled-components";

export default function PlanetsNav(props) {
  console.log(props.planet.color);
  return (
    <NavContainer>
      <Nav>
        <H5 planet={props.planet}>OVERVIEW</H5>
        <H5 planet={props.planet}>STRUCTURE</H5>
        <H5 planet={props.planet}>SURFACE</H5>
      </Nav>
      <Border></Border>
    </NavContainer>
  );
}
const NavContainer = styled.div`
  position: relative;
  @media (min-width: 768px) {
    position: absolute;
    bottom: 150px;
    right: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  @media (min-width: 768px) {
    flex-direction: column;
    margin: 0;
    gap: 16px;
  }
`;

const Border = styled.div`
  position: absolute;
  left: -24px;
  right: -24px;
  top: 10px;
  background: #ffffff;
  mix-blend-mode: normal;
  margin-top: 20px;
  opacity: 0.2;
  width: 100vw;
  height: 1px;
  @media (min-width: 768px) {
    display: none;
  }
`;
const H5 = styled.h5`
  font-family: "Spartan", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 1.92857px;
  color: #ffffff;
  margin: 0;
  cursor: pointer;
  padding-bottom: 17px;
  &:hover {
    border-bottom: 2px solid ${(props) => props.planet.color};
  }
  @media (min-width: 768px) {
    flex-direction: column;
    margin: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 280px;
    height: 40px;
    text-align: left;
    padding: 13px 20px;
    &:hover {
      background-color: ${(props) => props.planet.color};
    }
  }
`;
