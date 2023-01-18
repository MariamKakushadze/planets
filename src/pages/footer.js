import styled from "styled-components";

export default function Footer(props) {
  return (
    <FooterContainer>
      <Div>
        <Name>ROTATION TIME</Name>
        <Stats>{props.planet.rotation}</Stats>
      </Div>
      <Div>
        <Name>REVOLUTION TIME</Name>
        <Stats>{props.planet.revolution}</Stats>
      </Div>
      <Div>
        <Name>RADIUS</Name>
        <Stats>{props.planet.radius}</Stats>
      </Div>
      <Div>
        <Name>AVERAGE TEMP.</Name>
        <Stats>{props.planet.temperature}</Stats>
      </Div>
    </FooterContainer>
  );
}

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 25px;
`;

const Div = styled.div`
  mix-blend-mode: normal;

  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

const Name = styled.p`
  font-family: "Spartan", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 0.727273px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin: 0;
`;

const Stats = styled.p`
  font-family: "Antonio", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.75px;
  margin: 0;
  color: #ffffff;
`;
