import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Servicios</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, subtitle, description, subdescriptions, tags, source, visit}) => (
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
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;