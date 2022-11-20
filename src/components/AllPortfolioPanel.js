import styled from "styled-components";
import CanvasDraw from "react-canvas-draw";
import { useEffect, useRef, useState } from "react";
import { circle } from "../assets/firstPanelCircle.svg";
import uncovrLogo from "../assets/uncovrLogo.png";
import browser from "../assets/browser.png";
import githubLogo from "../assets/github.png";
import ProjectBox from "./projectBox";

const MainContainer = styled.div`
  background-color: #020c1b;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const AllProjectsContainer = styled.div`
  background-color: #020c1b;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  flex-wrap: wrap;
`;
const SectionTitle = styled.div`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 40px;
`;

const AllPortfolioPanel = () => {
  const [brushSize, setBrushSize] = useState(1);
  const [color, setColor] = useState("#2a9d8f");
  const [image, setImage] = useState("");
  const [classy, setClassy] = useState(false);
  const ref = useRef();

  return (
    <MainContainer>
      <SectionTitle>Other projects</SectionTitle>
      <AllProjectsContainer>
        <ProjectBox
          website="http"
          mobile="http"
          github="http"
          title="Unitopia"
          description="A NFT-minting website where you can mint a planet of your choice."
          techs={["Solidity", "React"]}
        />
        <ProjectBox
          website="http"
          mobile="http"
          github="http"
          title="Unitopia"
          description="A NFT-minting website where you can mint a planet of your choice."
          techs={["Solidity", "React"]}
        />
        <ProjectBox
          website="http"
          mobile="http"
          github="http"
          title="Unitopia"
          description="A NFT-minting website where you can mint a planet of your choice."
          techs={["Solidity", "React"]}
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
