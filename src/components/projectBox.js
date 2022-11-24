import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { circle } from "../assets/firstPanelCircle.svg";
import uncovrLogo from "../assets/uncovrLogo.png";
import browser from "../assets/link.png";
import githubLogo from "../assets/github.png";
import mobileLogo from "../assets/smartphone.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
const ProjectContainer = styled.div`
  width: 250px;
  height: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 3px black;
  margin-left: 10px;
  border-radius: 5px;

  cursor: pointer;

  position: relative;
`;
const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const ProjectTitle = styled.div`
  display: flex;
  color: #f4a261;
  text-align: left;
  width: 100%;
`;
const ProjectDescription = styled.div`
  display: flex;
  color: #ffffff;
`;
const ProjectTech = styled.div`
  display: flex;
  color: #ffffff;
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const ProjectBox = ({ website, mobile, github, title, description, techs }) => {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;
    console.log(e.clientX);
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <AnimationOnScroll
      animateIn="animate__bounceInDown"
      duration={1}
      animateOnce={true}
      offset={200}
    >
      <a href={website} target="_blank">
        <ProjectContainer className="card" onMouseMove={handleOnMouseMove}>
          <div className="card-content">
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectTech>
              {techs.map((tech, i) => (
                <p key={`tech${i}`}>{tech} </p>
              ))}
            </ProjectTech>
            <ProjectHeader>
              {website ? (
                <a href={website} target="_blank">
                  <img src={browser} width={20} />
                </a>
              ) : (
                ""
              )}
              {mobile ? (
                <a href={mobile} target="_blank">
                  <img src={mobileLogo} width={20} />
                </a>
              ) : (
                ""
              )}
              {github ? (
                <a href={github} target="_blank">
                  <img src={githubLogo} width={20} />
                </a>
              ) : (
                ""
              )}
            </ProjectHeader>
          </div>
        </ProjectContainer>
      </a>
    </AnimationOnScroll>
  );
};

export default ProjectBox;
