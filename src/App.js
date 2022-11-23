import logo from "./logo.svg";
import styled from "styled-components";
import IntroPanel from "./components/IntroPanel";
import BioPanel from "./components/BioPanel";
import MainPortfolioPanel from "./components/MainPortfolioPanel";
import AllPortfolioPanel from "./components/AllPortfolioPanel";
import ExperiencePanel from "./components/ExperiencePanel";

const App = () => {
  return (
    <>
      <IntroPanel />
      <BioPanel />
      <ExperiencePanel />
      <MainPortfolioPanel />
      <AllPortfolioPanel />
    </>
  );
};

export default App;
