import styled from "styled-components";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

const MainContainer = styled.div`
  background-color: #020c1b;

  height: 60px;
  box-shadow: 1px 1px 5px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 50px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Email = styled.p`
  color: white;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.a`
  margin-left: 20px;
`;
const NavigationContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
`;
const Number = styled.span`
  color: #8bd9ff;
`;
const NavigationLink = styled.a`
  margin-left: 10px;
  height: 100%;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #8bd9ff;
  }
  transition: all 0.2s ease;
`;
const Button = styled.div`
  padding: 10px 0 10px 0;
  border: 1px solid white;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  &:hover {
    color: #8bd9ff;
    cursor: pointer;
  }
  transition: all 0.2s ease;
`;
const NavBar = () => {
  return (
    <MainContainer>
      <LogoContainer>
        <Logo href="https://github.com/Ajmasta" target="_blank">
          <img width={25} src={githubLogo} />
        </Logo>
        <Logo
          href="https://www.linkedin.com/in/adrien-moevus-12249180/"
          target="_blank"
        >
          <img width={25} src={linkedinLogo} />
        </Logo>
      </LogoContainer>
      <NavigationContainer>
        <NavigationLink href="#bio">
          <Number>1. </Number> Bio{" "}
        </NavigationLink>
        <NavigationLink href="#xp">
          <Number>2. </Number>Work{" "}
        </NavigationLink>
        <NavigationLink href="#feat">
          <Number>3. </Number>Featured Projects
        </NavigationLink>{" "}
        <NavigationLink href="#other">
          <Number>4. </Number>Other Projects
        </NavigationLink>
        <NavigationLink href="Adrien_Moevus_Resume.pdf">
          <Button>Resume</Button>
        </NavigationLink>
      </NavigationContainer>
    </MainContainer>
  );
};
export default NavBar;
