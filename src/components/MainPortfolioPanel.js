import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { circle } from "../assets/firstPanelCircle.svg";
import uncovrLogo from "../assets/uncovrPhone.png";
import aetherPreview from "../assets/aethermarketIntro.png";
import metapassPreview from "../assets/metapass.png";
import githubLogo from "../assets/github.png";
import linkIcon from "../assets/link.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const MainContainer = styled.div`
  background-color: #020c1b;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ProjectInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  flex-direction: column;
  color: #ffffff;
  z-index: 1;
  text-align: left;
`;
const ProjectInfoContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  flex-direction: column;
  color: #ffffff;
  z-index: 1;
  text-align: right;
`;
const ProjectTitleContainer = styled.div`
  display: flex;
  text-align: left;

  margin-left: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  color: #5ba9f0;
  font-size: 24px;
`;
const ProjectTitleContainerRight = styled.div`
  display: flex;
  text-align: right;
  width: 100%;
  margin-left: 20px;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  color: #5ba9f0;
  font-size: 24px;
`;
const ProjectSummaryContainer = styled.div`
  background-color: #253a68;
  max-width: 400px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  position: relative;

  border-radius: 10px;
  box-shadow: 1px 1px 5px black;
  font-size: 18px;
`;
const ProjectTechContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  color: #f4a261;
  @media (max-width: 1000px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
const ProjectLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  align-items: center;
  position: relative;
  width: 150px;
`;
const ProjectImageContainer = styled.div`
  background-color: #020c1b;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  margin-left: -100px;
  transition: all 1s ease;
  &:hover {
    margin-left: 0px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const ProjectImageContainerRight = styled.div`
  background-color: #020c1b;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  margin-right: -100px;
  transition: all 1s ease;
  &:hover {
    margin-right: 0px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const ImgContainer = styled.div`
  width: 580px;
  height: 580px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #2c3ccc 0%,
    rgba(0, 24, 240, 0) 100%
  );
`;
const Image = styled.img`
  width: 700px;
`;

const SectionTitle = styled.div`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 40px;
`;

const MainPortfolioPanel = () => {
  return (
    <MainContainer id="feat">
      <SectionTitle>Featured projects</SectionTitle>
      <ProjectContainer>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          duration={1}
          animateOnce={true}
          style={{ zIndex: 3 }}
        >
          <ProjectInfoContainer>
            <ProjectTitleContainer>Uncovr</ProjectTitleContainer>
            <ProjectSummaryContainer>
              An app I built to let upcoming musicians get feedback on their
              music, discover new songs and create a bigger fanbase. <br />{" "}
              <br /> Anyone can upload their songs, ask customized questions and
              give or receive feedback easily.
            </ProjectSummaryContainer>
            <ProjectTechContainer>
              react-native NodeJs MongoDb Express
            </ProjectTechContainer>
            <ProjectLinksContainer>
              <a href="https://play.google.com/store/apps/details?id=com.uncovr.pluszero&fbclid=IwAR3oX2XtdJB7FNfweIhddgGaXguIiFMbsvxwxAYcYcGcZ_eX5KNmC6A8kVA">
                <img width="25" src={playstore} alt="playstore icon" />{" "}
              </a>
              <a href="https://apps.apple.com/app/uncovr-music/id1644635935?platform=iphone">
                <img width="25" src={appstore} alt="appstore icon" />{" "}
              </a>
              <a href="https://uncovr.xyz">
                <img width="25" src={linkIcon} alt="link icon" />{" "}
              </a>
            </ProjectLinksContainer>
          </ProjectInfoContainer>
        </AnimationOnScroll>
        <ProjectImageContainer>
          <ImgContainer>
            <Image src={uncovrLogo} />
          </ImgContainer>
        </ProjectImageContainer>
      </ProjectContainer>

      <ProjectContainer>
        <ProjectImageContainerRight>
          <ImgContainer>
            <Image src={aetherPreview} />
          </ImgContainer>
        </ProjectImageContainerRight>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          duration={1}
          animateOnce={true}
          style={{ zIndex: 3 }}
        >
          <ProjectInfoContainerRight>
            <ProjectTitleContainerRight>
              Aethermarket
            </ProjectTitleContainerRight>
            <ProjectSummaryContainer>
              A web-based NFT marketplace on the IMX blockchain. It was featured
              by a popular youtuber (EllioTrades) and received a decent amount
              of traffic (1k+ daily). <br />
              It is now in maintenance mode as I wanted to focus on other
              projects.
            </ProjectSummaryContainer>
            <ProjectTechContainer>NextJS React Express</ProjectTechContainer>
            <ProjectLinksContainer>
              <a href="https://github.com/Ajmasta/Aethermarket">
                <img width="25" src={githubLogo} alt="github Logo" />{" "}
              </a>{" "}
              <a href="https://aethermarket-9j2e2usdw-ajmasta.vercel.app/">
                <img width="25" src={linkIcon} alt="link icon" />{" "}
              </a>
            </ProjectLinksContainer>
          </ProjectInfoContainerRight>
        </AnimationOnScroll>
      </ProjectContainer>
      <ProjectContainer>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          duration={1}
          animateOnce={true}
          style={{ zIndex: 3 }}
        >
          <ProjectInfoContainer>
            <ProjectTitleContainer>Metapass</ProjectTitleContainer>
            <ProjectSummaryContainer>
              Metapass is a project that uses DIDs (Decentralized Identifiers)
              to help anyone manage their online identity. The app lets anyone
              create a Digital ID, and scan QR codes to login or send any
              information they want.
              <br /> <br />I built a landing page and an app, but the app is
              currently a MVP and not available to the public.
            </ProjectSummaryContainer>
            <ProjectTechContainer>
              react-native nodeJs MongoDb Ethers Veramo
            </ProjectTechContainer>
            <ProjectLinksContainer>
              <a href="https://github.com/Ajmasta/metapasslanding">
                <img width="25" src={githubLogo} alt="github Logo" />
              </a>{" "}
              <a href="https://ajmasta.github.io/metapasslanding">
                <img width="25" src={linkIcon} alt="link icon" />{" "}
              </a>
            </ProjectLinksContainer>
          </ProjectInfoContainer>
        </AnimationOnScroll>

        <ProjectImageContainer>
          <ImgContainer>
            <Image src={metapassPreview} />
          </ImgContainer>
        </ProjectImageContainer>
      </ProjectContainer>
    </MainContainer>
  );
};

export default MainPortfolioPanel;
