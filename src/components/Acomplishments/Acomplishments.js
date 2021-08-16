import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { contactos } from '../../constants/constants';



const Acomplishments = () => (
  <Section>
    <SectionTitle>Contactos</SectionTitle>
        <SectionText>Lista de contactos de los diferentes grupos de Diseño & Aplicaciones, enfocados en controles de iluminación:</SectionText>
    <Boxes>
      {contactos.map(({team, id, members}) => (
        <Box key={id}>
          <BoxNum>{team}</BoxNum>
          {members.map((member, i) => (
            <BoxText key={i}>{member}</BoxText>
          ))}
          
        </Box>
      ))}
    </Boxes>
 </Section>
);

export default Acomplishments;
