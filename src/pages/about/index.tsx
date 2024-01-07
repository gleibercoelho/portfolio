// pages/about.js

import TransitionWrapper from "../../components/transition";
import AboutComponent from "../../components/about CP";
import HeaderCV from "../../components/header/header cv";

const About = () => {


  return (
    <>     
     <TransitionWrapper>
      <HeaderCV/>
      <AboutComponent />
      </TransitionWrapper>
    </>
  );
}

export default (About);
