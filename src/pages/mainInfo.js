import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Main({ planet, selectedNav }) {
  const [image, setImage] = useState();
  const [imageGeo, setImageGeo] = useState();
  const [info, setInfo] = useState(null);
  const [link, setLink] = useState();

  useEffect(() => {
    switch (selectedNav) {
      case "overview":
        if (planet && planet.name) {
          import(`../assets/planet-${planet.name}.svg`).then((image) =>
            setImage(image.default)
          );
        }
        setInfo(planet.overview && planet.overview.content);
        setLink(planet.overview && planet.overview.source);
        break;

      case "structure":
        if (planet && planet.name) {
          import(`../assets/planet-${planet.name}-internal.svg`).then((image) =>
            setImage(image.default)
          );
        }
        setInfo(planet.structure && planet.structure.content);
        setLink(planet.structure && planet.structure.source);
        break;

      case "surface":
        if (planet && planet.name) {
          import(`../assets/planet-${planet.name}.svg`).then((image) =>
            setImage(image.default)
          );
        }
        if (planet && planet.name) {
          import(`../assets/geology-${planet.name}.png`).then((imageGeo) =>
            setImageGeo(imageGeo.default)
          );
        }
        setInfo(planet.geology && planet.geology.content);
        setLink(planet.geology && planet.geology.source);
        break;

      default:
        break;
    }
  }, [selectedNav, planet]);
  console.log(link);
  return (
    <MainCOntainer>
      <ImageDiv>
        <PlanetImg src={image} alt="" />
        {selectedNav === "surface" && <PlanetImgGeo src={imageGeo} alt="" />}
      </ImageDiv>
      <TextContainer>
        <P>{planet.name}</P>
        <Content>{info}</Content>
        <Source>
          Source:
          <A href={link} target="_blank">
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
  margin: 0;
  margin-top: 20px;
  max-width: 1100px;
  @media (min-width: 1440px) {
    display: flex;
  }
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
  @media (min-width: 1440px) {
    order: 2;
    margin-top: 120px;
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
  @media (min-width: 1440px) {
    font-size: 60px;
    line-height: 104px;
  }
`;
const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  position: relative;
  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
  @media (min-width: 1440px) {
    order: 1;
    margin: 20px auto;
    width: 650px;
    height: 650px;
  }
`;

const PlanetImg = styled.img`
  width: 60%;
  @media (min-width: 1440px) {
    width: auto;
  }
`;
const PlanetImgGeo = styled.img`
  position: absolute;
  top: 60%;
  max-width: 100px;
  @media (min-width: 768px) {
    max-width: 120px;
    top: 65%;
  }
  @media (min-width: 1440px) {
    max-width: 150px;
  }
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
  @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 25px;
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
  @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 25px;
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
