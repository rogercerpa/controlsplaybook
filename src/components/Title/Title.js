import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ButtonColumn } from './TitleStyles';

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
      <ButtonColumn>
        <Button onClick={() => window.open("https://www.acuitybrands.com/products/controls", '_blank')} >Aprende más!</Button>
        <Button onClick={() => window.open("https://forms.gle/qM1C82AggZxV1T757", '_blank')} >Danos tu Opinión</Button>
      </ButtonColumn>
    </LeftSection>
    
</Section>
);

export default Title;