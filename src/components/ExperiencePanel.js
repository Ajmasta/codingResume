import styled from "styled-components";
import pixelArt from "../assets/adrien.jpg";

const MainContainer = styled.div`
  background-color: #020c1b;

  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const SectionTitle = styled.div`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 40px;
`;
const ExperiencePanel = () => {
  return (
    <MainContainer>
      <SectionTitle>Work Experience</SectionTitle>
    </MainContainer>
  );
};

export default ExperiencePanel;
