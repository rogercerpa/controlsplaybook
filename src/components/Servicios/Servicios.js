import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ServiciosStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { servicios } from '../../constants/constants';

const Servicios = () => (

  <Section nopadding id="servicios">
    <SectionDivider />
    <SectionTitle main>Servicios</SectionTitle>
    <GridContainer>
      {servicios.map(({id, image, title, subtitle, description, subdescriptions, tags, source, visit, leadTime}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <HeaderThree subtitle>{subtitle}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br />
           
          <TagList>
              {subdescriptions.map((sub,i) => (
                <Tag key={i}>
                  {sub}
                </Tag>
              ))}
          </TagList>
          
           <br />
          <div>
            <TitleContent>Incluye:</TitleContent>
            <TagList>
              {tags.map((tag,i) => (
                <Tag key={i}>
                  {tag}
                </Tag>
              ))}
            </TagList>
          </div>
          <br />
          <TitleContent>Tiempo de Espera:</TitleContent>
          <Tag>{leadTime}</Tag>
          <UtilityList>
            {/* <ExternalLinks href={visit}>Code</ExternalLinks> */}
            <ExternalLinks href={source} target="_blank" rel="noopener">Request</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
  
);

export default Servicios;