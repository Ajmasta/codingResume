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
  margin-bottom: 40px;
  @media (max-width: 1000px) {
    margin-top: 100px;
  }
`;

const AllPortfolioPanel = () => {
  return (
    <MainContainer>
      <SectionTitle>Other projects</SectionTitle>

      <AllProjectsContainer id="cards">
        <ProjectBox
          website="https://ajmasta.github.io/unitopia/"
          github="https://github.com/Ajmasta/unitopia"
          title="Unitopia"
          description="A NFT-minting website where you can mint a planet of your choice."
          techs={["Solidity", "React"]}
        />
        <ProjectBox
          onMouseMove
          website="https://sophia-ajmasta.vercel.app/"
          github="https://github.com/Ajmasta/sophia"
          title="Bureau Sophia"
          description="A mock website for a digital and financial consulting agency."
          techs={["React", "NextJS"]}
        />
        <ProjectBox
          website="https://getbacktohealth.ca/"
          github="https://github.com/Ajmasta/backtohealthlanding"
          title="Back To Health"
          description="The landing page for the startup I co-founded."
          techs={["React"]}
        />
        <ProjectBox
          website="https://ajmasta.github.io/Etch-A-Sketch/"
          github="https://github.com/Ajmasta/backtohealthlanding"
          title="Etch-a-Sketch"
          description="A simple website to do pixel art straight from your browser"
          techs={["VanillaJs", "CSS", "HTML"]}
        />
        <ProjectBox
          website="https://ajmasta.github.io/threedearth/"
          github="https://ajmasta.github.io/Etch-A-Sketch/"
          title="3d Earth"
          description="A website rendering a 3d model of the earth."
          techs={["ThreeJS", "React"]}
        />
        <ProjectBox
          website="https://www.stefanmorisset.com/"
          title="Stefan Morisset Photography"
          description="A website made with Squarespace and custom CSS for a professional photographer."
          techs={["Squarespace", "CSS"]}
        />
        <ProjectBox
          website="https://ajmasta.github.io/TicTacToe/"
          github="https://github.com/Ajmasta/TicTacToe"
          title="Tic-Tac-Toe"
          description="A simple Tic-Tac-Toe game where you can play against the computer or a friend"
          techs={["VanillaJS", "CSS"]}
        />
        <ProjectBox
          website="https://ajmasta.github.io/Karabagh/"
          github="https://github.com/Ajmasta/Karabagh"
          title="Peace For Karabagh"
          description="An informational website on Artsakh (Nagorbo-Karabagh)"
          techs={["React"]}
        />
      </AllProjectsContainer>
    </MainContainer>
  );
};

export default AllPortfolioPanel;
