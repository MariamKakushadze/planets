import styled from "styled-components";
import { useState } from "react";

export default function Main(props) {
  //const photo = import(`../assets/planet-${props.planet.name}.svg`);

  const [image, setImage] = useState();

  if (props.planet && props.planet.name) {
    import(`../assets/planet-${props.planet.name}.svg`).then((image) =>
      setImage(image.default)
    );
  }

  return (
    <MainCOntainer>
      <PlanetImg src={image} alt="" />
      <TextContainer>
        <P>{props.planet.name}</P>
        <Content>
          {props.planet.overview && props.planet.overview.content}
        </Content>
        <Source>
          Source:
          <A
            href={props.planet.overview && props.planet.overview.source}
            target="_blank"
          >
            Wikipedia
            <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path
                fill="#FFF"
                d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                opacity=".5"
              />
            </Svg>
          </A>
        </Source>
      </TextContainer>
    </MainCOntainer>
  );
}

const MainCOntainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    text-align: left;
    max-width: 340px;
    align-items: flex-start;
    margin: 0;
  }
`;

const P = styled.p`
  color: #ffffff;
  font-family: "Antonio", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 52px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 48px;
  }
`;
const PlanetImg = styled.img`
  margin: 85px auto;
  width: auto;
  max-width: 40%;
`;

const Content = styled.span`
  color: #fff;
  font-family: "Spartan", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  letter-spacing: 1px;
  @media (min-width: 768px) {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Source = styled.div`
  margin-top: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: "Spartan", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Svg = styled.svg`
  margin-left: 5px;
`;
const A = styled.a`
  margin: 0;
  text-decoration: none;
  color: white;
`;
