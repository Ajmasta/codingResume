import IntroPanel from "./components/IntroPanel";
import BioPanel from "./components/BioPanel";
import MainPortfolioPanel from "./components/MainPortfolioPanel";
import AllPortfolioPanel from "./components/AllPortfolioPanel";
import ExperiencePanel from "./components/ExperiencePanel";
import ContactPanel from "./components/contactPanel";
import NavBar from "./components/navBar";

const App = () => {
  return (
    <>
      <NavBar />
      <IntroPanel />
      <BioPanel />
      <ExperiencePanel />
      <MainPortfolioPanel />
      <AllPortfolioPanel />
      <ContactPanel />
    </>
  );
};

export default App;
