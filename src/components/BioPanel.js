import styled from "styled-components";
import pixelArt from "../assets/adrien.jpg";

const OverallContainer = styled.div`
  background-color: #020c1b;
  height: 100vh;

  @media (max-height: 900px) {
    padding-top: 100px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const MainContainer = styled.div`
  background-color: #020c1b;

  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Title = styled.span`
  color: #5ba9f0;
  font-size: 26px;
  display: flex;
  align-items: center;
  &:after {
    width: 300px;
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
`;
const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
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
  border-radius: 93% 7% 100% 0% / 64% 32% 68% 36%;
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

  border-radius: 93% 7% 100% 0% / 64% 32% 68% 36%;
`;
const BioContainer = styled.div`
  color: #ffffff;
  width: 50%;
`;
const BioPanel = () => {
  return (
    <OverallContainer>
      <Title> About me</Title>
      <MainContainer>
        <LeftContainer>
          <BioContainer>
            From interactive front-end experiences, to intricate back-ends and
            safe smart contracts, I love to build anything web. I am a
            self-taught programmer, who loves to build things and face new
            challenges. I am constantly learning new things to improve as a
            coder.
            <br /> <br /> <br />
            While I started coding as a simply hobby, my friends and relatives
            quickly asked me to build websites for them. When I realized I could
            make a living out of this, I started my work as a freelancer. During
            that time, I built several websites using a variety of tools adapted
            to my clients.
            <br /> <br /> <br />
            <ul>
              <li>Javascript</li>
              <li>Typescript</li> <li>CSS</li> <li>HTML</li> <li>Javascript</li>
            </ul>
          </BioContainer>
        </LeftContainer>

        <RightContainer>
          <ImgContainer>
            <Img src={pixelArt} />

            <ImgBackground />
          </ImgContainer>
        </RightContainer>
      </MainContainer>
    </OverallContainer>
  );
};

export default BioPanel;
