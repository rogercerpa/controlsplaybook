import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './TitleStyles';

const Title = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenido a tu<br />
        Controls PlayBook
      </SectionTitle>
      <SectionText>
        ¡Aquí encontrarás toda la información necesaria para aprender, diseñar y cotizar tu proyecto de controles de iluminación!
      </SectionText>
      <Button onClick={()=> window.open("https://www.acuitybrands.com/products/controls", '_blank')} >Aprende más!</Button>
    </LeftSection>
    
</Section>
);

export default Title;