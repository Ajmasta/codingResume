import { useState } from "react";
import styled from "styled-components";
import pixelArt from "../assets/portraitOrangeBg.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
const OverallContainer = styled.div`
  background-color: #020c1b;
  height: 100vh;

  @media (max-width: 1000px) {
    padding-top: 100px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const MainContainer = styled.div`
  background-color: #020c1b;

  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const EmphasizedWord = styled.span`
  color: #8bd9ff;
`;
const Title = styled.span`
  color: #5ba9f0;
  font-size: 26px;
  display: flex;
  align-items: center;
  &:after {
    width: 300px;
    @media (max-width: 1000px) {
      width: 100px;
    }
    height: 1px;
    background-color: #64ffda;
    display: block;
    margin-left: 20px;
    content: " ";
    background-image: linear-gradient(90deg, #f4a261 0%, #e76f51 100%);
  }
  &:before {
    content: "02.";
    margin-right: 20px;
    background-image: linear-gradient(90deg, #f4a261 0%, #e76f51 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
  &:hover:before {
    opacity: 1;
  }
`;
const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 1000px) {
    width: 100%;
    align-items: center;
  }
`;
const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const ImgContainer = styled.div`
  height: 380px;
  width: 500px;
  position: relative;
  border-radius: 10%;
  position: absolute;
`;

const Img = styled.img`
  height: 380px;
  width: 500px;
  z-index: 100;
  position: relative;
  border-radius: 98% 2% 100% 0% / 100% 0% 100% 0%;

  transition: all 1s ease;
`;
const ImgBackground = styled.div`
  height: 380px;
  width: 500px;
  left: 60px;
  top: 0px;
  border: 5px solid #50a0f0;
  position: absolute;
  z-index: 0;
  background-color: #020c1b;

  border-radius: 98% 2% 100% 0% / 100% 0% 100% 0%;
  transition: all 1s ease;
`;
const BioContainer = styled.div`
  color: #ffffff;
  width: 50%;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;
const ListsContainer = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const BioPanel = () => {
  const [hover, setHover] = useState(false);
  return (
    <OverallContainer>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        duration={2}
        animateOnce={true}
      >
        <Title> About me</Title>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        duration={2}
        animateOnce={true}
      >
        <MainContainer>
          <LeftContainer>
            <BioContainer>
              I am a <EmphasizedWord>self-taught</EmphasizedWord> developper who
              loves to build new things using a wide variety of technologies.
              From interactive <EmphasizedWord>front-end</EmphasizedWord>{" "}
              experiences, to intricate{" "}
              <EmphasizedWord>back-ends</EmphasizedWord> and safe
              <EmphasizedWord> smart contracts</EmphasizedWord>, I love to turn
              any good idea into reality. This passion of mine has led me
              towards building my own projects, co-founding a{" "}
              <EmphasizedWord>startup</EmphasizedWord>, and working as an{" "}
              <EmphasizedWord>independent contractor</EmphasizedWord> to help
              web agencies build beautiful apps for their clients.
              <br /> <br /> <br />
              While I started coding as a simple hobby, my friends and relatives
              quickly asked me to build websites for them. I quickly realized I
              could make a living out of this so I started taking requests from
              clients. This is how I landed my first official job as a fullstack
              developper at
              <EmphasizedWord> Phoenix GMI</EmphasizedWord> . The better I got,
              the more I worked on my own project and I decided in 2021 to
              co-found my own startup, which is currently in the{" "}
              <EmphasizedWord> McGill Dobson Incubator Program</EmphasizedWord>,
              and to have more time for myself by working as an independent
              contractor. Since then, I've been working with{" "}
              <EmphasizedWord>web agencies</EmphasizedWord> , individual
              clients, and companies to turn their vision into reality.
              <br /> <br />
              Here is a sample of technologies I use:
              <ListsContainer>
                <ul>
                  <li>Typescript</li> <li>Javascript</li>
                  <li>CSS</li> <li>HTML</li>
                  <li>Wordpress</li>
                  <li>MongoDb</li>
                </ul>
                <ul>
                  {" "}
                  <li>React</li>
                  <li>React-native</li>
                  <li>NextJS</li>
                  <li>Node</li>
                  <li>Express</li> <li>SQL</li>
                </ul>
              </ListsContainer>
            </BioContainer>
          </LeftContainer>

          <RightContainer>
            <ImgContainer>
              <Img
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                src={pixelArt}
                style={hover ? { borderRadius: "10px" } : {}}
              />

              <ImgBackground
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={hover ? { borderRadius: "10px" } : {}}
              />
            </ImgContainer>
          </RightContainer>
        </MainContainer>
      </AnimationOnScroll>
    </OverallContainer>
  );
};

export default BioPanel;
