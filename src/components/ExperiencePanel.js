import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";
import pixelArt from "../assets/adrien.jpg";

const MainContainer = styled.div`
  background-color: #020c1b;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const SectionTitle = styled.div`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 40px;
`;
const TableContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  @media (max-width: 600px) {
    flex-direction: row;
    overflow: scroll;
    width: 300px;
    white-space: nowrap;
    height: 100px;
    justify-content: flex-start;
  }
`;
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  @media (max-width: 600px) {
    width: 300px;
  }
`;
const LeftCell = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    border-left: 3px solid #2b4990;
  }
  transition: 0.25s all ease;
  box-sizing: content-box;
  border-left: 3px solid #020c1b;
`;

const RightCell = styled.div`
  display: flex;
  flex-direction: column;
  color: "white";
  justify-content: "space-between";
  align-items: "space-around";

  margin-left: 15px;
`;
const JobTitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: white;
`;
const JobEmployer = styled.p`
  margin: 0;
  font-size: 14px;
  color: white;
`;
const JobDate = styled.p`
  margin: 0;
  font-size: 12px;
  color: white;
`;
const DescriptionContainer = styled.div`
  display: flex;
`;
const DotList = styled.p`
  margin-right: 10px;
`;
const Title = styled.span`
  color: #5ba9f0;
  font-size: 26px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
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
    content: "03.";
    margin-right: 20px;
    background-image: linear-gradient(90deg, #f4a261 0%, #e76f51 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
`;
const JobDescription = styled.p``;
const work = [
  {
    title: "Front-end Developper",
    employer: " Independent Contractor",
    description: [
      "Wrote modern, performant and maintainable code for various clients. Worked closely with web agencies.",
      "Worked with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, WordPress, Node and NextJs.",
      "Communicated with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
    date: "2021-Present",
  },
  {
    title: "Co-Founder (CTO)",
    employer: "Back To Health",
    description: [
      "Co-founded a startup to build web and mobile apps to help people. I am in charge of all web and mobile dev.",
      "Participated in McGill Dobson Incubator and other entreprenarial programs where I learned how to create a product and start a company ",
      "Had to use a wide array of technologies to continuously iterate and improve on our MVP. Mostly, React, react-native, NextJs, MongoDB and Express.",
    ],
    date: "2021-Present",
  },

  {
    title: "Fullstack Developper",
    employer: "Phoenix GMI",
    description: [
      " Worked with diverse technologies like CRM, Wordpress, or React to take care of the web and IT needs of the comapany",
      "Communicated on a weekly basis with teams of marketers, content creators, and designers to create new products.",
      "Had to find creative ways to create products maintainable by non-engineers.",
    ],
    date: "2019-2021",
  },
  {
    title: "Freelancer",

    description: [
      "Started freelancing as a self=taught developper to improve my skills",
      "Learned to listen to clients' needs and iterate upon products to make them of higher quality",
      "Found creative ways to fullfill customer request by using a variety of technologies ",
    ],
    date: "2018-2019",
  },
  {
    title: "Teacher Assistant",
    employer: "McGill University",
    description: [
      "Helped students understand and integrate the material",
      "Prepared classes and answered questions in person or via email",
      "Led class discussions",
    ],
    date: "2018-2019",
  },
];
const ExperiencePanel = () => {
  const [activeJob, setActiveJob] = useState(0);
  return (
    <MainContainer>
      <Title>Work Experience</Title>
      <TableContainer>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          duration={1}
          animateOnce={true}
        >
          <LeftColumn>
            {work.map((job, i) => (
              <LeftCell
                key={`${i}job`}
                onClick={() => setActiveJob(i)}
                style={
                  activeJob === i
                    ? {
                        borderLeft: "3px solid  #5b79c0",
                      }
                    : {}
                }
              >
                <JobTitle>{job.title}</JobTitle>
                <JobEmployer>{job.employer}</JobEmployer>
                <JobDate>{job.date}</JobDate>
              </LeftCell>
            ))}
          </LeftColumn>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          duration={1}
          animateOnce={true}
        >
          <RightColumn>
            <RightCell>
              {work[activeJob].description.map((element, i) => (
                <DescriptionContainer>
                  <DotList style={{ color: "#5b79c0", fontWeight: "900" }}>
                    -
                  </DotList>
                  <JobDescription
                    key={`description${i}`}
                    style={{ color: "white" }}
                  >
                    {element}
                  </JobDescription>
                </DescriptionContainer>
              ))}
            </RightCell>
          </RightColumn>
        </AnimationOnScroll>
      </TableContainer>
    </MainContainer>
  );
};

export default ExperiencePanel;
