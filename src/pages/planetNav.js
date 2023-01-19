import styled from "styled-components";

export default function PlanetsNav(props) {
  console.log(props.planet.color);
  return (
    <NavContainer>
      <Nav>
        <Div planet={props.planet}>
          <P>01</P>OVERVIEW
        </Div>
        <Div planet={props.planet}>
          <P>02</P>STRUCTURE
        </Div>
        <Div planet={props.planet}>
          <P>03</P>SURFACE
        </Div>
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
const P = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin: 0;
    opacity: 0.5;
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
const Div = styled.div`
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
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 17px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 280px;
    height: 40px;
    text-align: left;
    padding: 0;
    padding-left: 20px;
    &:hover {
      background-color: ${(props) => props.planet.color};
    }
  }
`;
