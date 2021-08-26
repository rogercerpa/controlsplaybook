import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListSubTitle } from './HerramientasStyles';
import { tools } from '../../constants/constants';




const Herramientas = () =>  (
  <Section nopadding id="herramientas">
    <SectionDivider />
    <br />
    <SectionTitle>Herramientas</SectionTitle>
    <SectionText>
      Los servicios que ofrece el equipo de DAS estan efocados en Exactitued, Eficiencia y Calidad!
    </SectionText>
    <List>
      {tools.map(({ id, title, subtitle, descriptions, features, image, link }) => (
        <a href={link} target="_blank">
        <ListItem key={id}>
          <ListContainer>
            <ListTitle>{title}</ListTitle>
            <ListSubTitle>{subtitle}</ListSubTitle>
            <ListParagraph>{descriptions}</ListParagraph>
          </ListContainer>
          </ListItem>
        </a>
        
      ))}

    </List>
  </Section>
  
);


export default Herramientas;
