import styled from "styled-components";
import ProjectBox from "./projectBox";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
const MainContainer = styled.div`
  background-color: #020c1b;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media (max-width: 1000px) {
    height: 100%;
  }
`;
const AllProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  width: calc(100% - 20px);
`;
const SectionTitle = styled.div`
  font-size: 30px;
  color: #ffffff;
`;
/*
etch a sketch
3dearth
sophia
tic tac toe
weather app
peace4Karabagh
stefanmorisset photography
*/

const AllPortfolioPanel = () => {
  return (
    <MainContainer>
      <SectionTitle>Other projects</SectionTitle>

      <AllProjectsContainer id="cards">
        <ProjectBox
          website="http"
          mobile="http"
          github="http"
          title="Unitopia"
          description="A NFT-minting website where you can mint a planet of your choice."
          techs={["Solidity", "React"]}
        />
        <ProjectBox
          onMouseMove
          website="http"
          mobile="http"
          github="http"
          title="Bureau Sophia"
          description="A mock website for a digital and financial consulting agency."
          techs={["React", "NextJS"]}
        />
        <ProjectBox
          website="http"
          mobile="http"
          github="http"
          title="Back To Health"
          description="The landing page for the startup I co-founded."
          techs={["React"]}
        />
        <ProjectBox
          website="http"
          mobile="http"
          github="http"
          title="Etch-a-Sketch"
          description="A simple website to do pixel art straight from your browser"
          techs={["VanillaJs", "CSS", "HTML"]}
        />
        <ProjectBox
          website="http"
          mobile="http"
          github="http"
          title="3d Earth"
          description="A website rendering a 3d model of the earth."
          techs={["ThreeJS", "React"]}
        />
        <ProjectBox
          website="http"
          mobile="http"
          github="http"
          title="Unitopia"
          description="A NFT-minting website where you can mint a planet of your choice."
          techs={["Solidity", "React"]}
        />
      </AllProjectsContainer>
    </MainContainer>
  );
};

export default AllPortfolioPanel;
