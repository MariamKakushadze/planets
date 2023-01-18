import styled from "styled-components";

export default function PlanetsNav() {
  return (
    <>
      <Nav>
        <H5>OVERVIEW</H5>
        <H5>STRUCTURE</H5>
        <H5>SURFACE</H5>
      </Nav>
      <Border></Border>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px; ;
`;

const Border = styled.div`
  position: absolute;
  left: -24px;
  right: -24px;
  background: #ffffff;
  mix-blend-mode: normal;
  margin-top: 20px;
  opacity: 0.2;
  width: 100vw;
  height: 1px;
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
`;
