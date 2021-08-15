import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './HerramientasStyles';
import { GrServices } from 'react-icons/gr';

const Herramientas = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Herramientas</SectionTitle>
    <SectionText>
      Los servicios que ofrece el equipo de DAS estan efocados en Exactitued, Eficiencia y Calidad!
    </SectionText>
    <List>
      <ListItem>
        <GrServices size="3rem" />
        <ListContainer>
          <ListTitle>Visual Controls</ListTitle>
          <ListParagraph>Lista de Materiales con estimados</ListParagraph>
        </ListContainer>
      </ListItem>
       <ListItem>
        <GrServices size="3rem" />
        <ListContainer>
          <ListTitle>Visual Lighting</ListTitle>
          <ListParagraph>Lista de Materiales con estimados</ListParagraph>
        </ListContainer>
      </ListItem>
       <ListItem>
        <GrServices size="3rem" />
        <ListContainer>
          <ListTitle>SOO (Secuencia de Operacion)</ListTitle>
          <ListParagraph>Lista de Materiales con estimados</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
</Section>
);

export default Herramientas;
