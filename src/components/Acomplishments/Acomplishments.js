import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "Conyers", text: 'Open Source Projects'},
  { number: "Ontario", text: 'Students', },
  { number: "Chicago", text: 'Github Followers', },
  { number: "Field Services", text: 'Github Stars', }
 
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Contactos</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
 </Section>
);

export default Acomplishments;
