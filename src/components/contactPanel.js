import styled from "styled-components";

const ContactButton = styled.a`
  background-color: transparent;
  border: 1px solid #5ba9f0;
  width: 200px;
  height: 70px;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  align-self: flex-start;
  color: #5ba9f0;
  text-decoration: none;

  margin-top: 100px;
  @media (max-width: 1000px) {
    margin-left: 0px;
    align-self: center;
  }
  &:hover {
    cursor: pointer;

    background-color: rgba(91, 169, 240, 0.2);
  }
`;
const MainContainer = styled.div`
  background-color: #020c1b;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding-bottom: 100px;
`;

const ContactPanel = () => {
  return (
    <MainContainer>
      <ContactButton href="mailto:adrien.moevus@gmail.com">
        Contact Me
      </ContactButton>
    </MainContainer>
  );
};

export default ContactPanel;
