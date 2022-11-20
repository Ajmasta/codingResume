import styled from "styled-components";
import CanvasDraw from "react-canvas-draw";
import { useEffect, useRef, useState } from "react";
import { circle } from "../assets/firstPanelCircle.svg";
import uncovrLogo from "../assets/uncovrLogo.png";
import browser from "../assets/browser.png";
import githubLogo from "../assets/github.png";
import mobileLogo from "../assets/smartphone.png";

const ProjectContainer = styled.div`
  width: 200px;
  height: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  box-shadow: 1px 1px 3px black;
  margin-left: 10px;
  border-radius: 5px;
`;
const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const ProjectTitle = styled.div`
  display: flex;
  color: blue;
  text-align: left;
  width: 100%;
`;
const ProjectDescription = styled.div`
  display: flex;
  color: #222222;
`;
const ProjectTech = styled.div`
  display: flex;
  color: #222222;
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const ProjectBox = ({ website, mobile, github, title, description, techs }) => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        {website ? (
          <a href={website} target="_blank">
            <img src={browser} width={30} />
          </a>
        ) : (
          ""
        )}
        {mobile ? (
          <a href={mobile} target="_blank">
            <img src={mobileLogo} width={30} />
          </a>
        ) : (
          ""
        )}
        {github ? (
          <a href={github} target="_blank">
            <img src={githubLogo} width={30} />
          </a>
        ) : (
          ""
        )}
      </ProjectHeader>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectTech>
        {techs.map((tech, i) => (
          <p key={`tech${i}`}>{tech} </p>
        ))}
      </ProjectTech>
    </ProjectContainer>
  );
};

export default ProjectBox;
