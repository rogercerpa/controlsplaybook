import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido a tu<br />
        Controls PlayBook
      </SectionTitle>
      <SectionText>
        ¡Aquí encontrarás toda la información necesaria para aprender, diseñar y cotizar tu proyecto de controles de iluminación!
      </SectionText>
      <Button onClick={()=> window.location = "https://www.acuitybrands.com/products/controls"} target="_blank" >Aprende más</Button>
    </LeftSection>
    
</Section>
);

export default Hero;