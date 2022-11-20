import styled from "styled-components";
import CanvasDraw from "react-canvas-draw";
import { useEffect, useRef, useState } from "react";
import { circle } from "../assets/firstPanelCircle.svg";
import uncovrLogo from "../assets/uncovrPhone.png";
import aetherPreview from "../assets/aethermarketIntro.png"
import metapassPreview from "../assets/metapass.png"

import anime from "animejs/lib/anime.es.js";

const MainContainer = styled.div`
  background-color: #020c1b;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  position: relative;
`;
const ProjectContainer = styled.div`
  background-color: #020c1b;
  display:flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const ProjectInfoContainer = styled.div`
  background-color: #020c1b;
  display:flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction:column;
  color:#ffffff;


`
const ProjectTitleContainer = styled.div`
display:flex;
text-align:left;
width:100%;
margin-left:20px;
justify-content: flex-start;
align-items: flex-start;
position: relative;
`
const ProjectSummaryContainer = styled.div`
  background-color: #343434;
  display:flex;
  padding:20px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index:1
`
const ProjectTechContainer = styled.div`
  background-color: #020c1b;
  display:flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const ProjectLinksContainer = styled.div`
  background-color: #020c1b;
  display:flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const ProjectImageContainer = styled.div`
  background-color: #020c1b;
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  margin-left:-100px;
  z-index:0
 
`
const ImgContainer = styled.div`
    width:580px;
   height:580px;
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
  background: radial-gradient(50% 50% at 50% 50%, #2C3CCC 0%, rgba(0, 24, 240, 0) 100%);
  
`
const Image = styled.img`
   width:700px
`

const SectionTitle = styled.div`
font-size:30px;
color:#ffffff;
margin-bottom:40px;
`

const MainPortfolioPanel = () => {
  
    const animation = useRef();
    useEffect(() => {
      animation.current = anime.timeline({
        direction: "normal",
      });
  
      animation.current.add({
        targets: "#hexagon path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuart",
        duration: 1000,
        delay: 150,
      });
    }, []);


  const ref = useRef();

  return( <MainContainer >
    <SectionTitle>
      Featured projects
    </SectionTitle>
      <ProjectContainer>
        <ProjectInfoContainer>
        <ProjectTitleContainer>
        Uncovr
        </ProjectTitleContainer>
          <ProjectSummaryContainer>
             
              A mobile app to let anyone get feedback on their music, and discover new songs. 

          </ProjectSummaryContainer>
          <ProjectTechContainer>
            react-native nodeJs MongoDb
          </ProjectTechContainer>
          <ProjectLinksContainer>
            Github Ios Android
          </ProjectLinksContainer>
        </ProjectInfoContainer>

        <ProjectImageContainer>
            <ImgContainer>
                <Image src={uncovrLogo} />
            </ImgContainer>
        </ProjectImageContainer>
      </ProjectContainer>
  
      <ProjectContainer>
      
        <ProjectImageContainer>
              <ImgContainer>
                  <Image src={aetherPreview} />
              </ImgContainer>
          </ProjectImageContainer>
          <ProjectInfoContainer>
          <ProjectTitleContainer>
          Uncovr
          </ProjectTitleContainer>
            <ProjectSummaryContainer>
              
                A mobile app to let anyone get feedback on their music, and discover new songs. 

            </ProjectSummaryContainer>
            <ProjectTechContainer>
              react-native nodeJs MongoDb
            </ProjectTechContainer>
            <ProjectLinksContainer>
              Github Ios Android
            </ProjectLinksContainer>
          </ProjectInfoContainer>

      </ProjectContainer>
      <ProjectContainer>
        <ProjectInfoContainer>
        <ProjectTitleContainer>
        Uncovr
        </ProjectTitleContainer>
          <ProjectSummaryContainer>
             
              A mobile app to let anyone get feedback on their music, and discover new songs. 

          </ProjectSummaryContainer>
          <ProjectTechContainer>
            react-native nodeJs MongoDb
          </ProjectTechContainer>
          <ProjectLinksContainer>
            Github Ios Android
          </ProjectLinksContainer>
        </ProjectInfoContainer>

        <ProjectImageContainer>
            <ImgContainer>
                <Image src={metapassPreview} />
            </ImgContainer>
        </ProjectImageContainer>
      </ProjectContainer>
  </MainContainer>)
};

export default MainPortfolioPanel;
