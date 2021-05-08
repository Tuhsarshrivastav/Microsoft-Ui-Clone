import ChooseYourMs from "./components/ChooseYourMs";
import Footer from "./components/Footer";
import GamePass from "./components/GamePass";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MSResponse from "./components/MSResponse";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Social from "./components/Social";
import ThisHoliday from "./components/ThisHoliday";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ChooseYourMs />
      <Section2 />
      <GamePass />
      <Section3 />
      <MSResponse />
      <ThisHoliday />
      <Social />
      <Footer/>
    </>
  );
}

export default App;
