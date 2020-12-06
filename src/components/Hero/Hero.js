import React from "react";
import Navbar from "../Navbar/Navbar";
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItem, HeroP } from "./HeroElement";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
          <HeroItem>
              <HeroH1>Greatest Pizza Ever</HeroH1>
              <HeroP>Ready in 60 seconds</HeroP>
              <HeroBtn>Place Order</HeroBtn>
          </HeroItem>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
