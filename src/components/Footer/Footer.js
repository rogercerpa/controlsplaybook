import React from 'react';
import { AiOutlineForm  } from 'react-icons/ai';
import { RiProductHuntLine } from 'react-icons/ri'
import {CgSoftwareDownload} from 'react-icons/cg'

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, Span1 } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Controles Soporte técnico:</LinkTitle>
          <LinkItem href="tel:(800) 535-2465">  (800) 535-2465</LinkItem>
        </LinkColumn>
        <LinkColumn>
          
          <LinkTitle>nLight Wired:</LinkTitle>
          <LinkItem href="mailto:nLight-Support@acuitybrands.com" target="_blank">
            nLight-Support@acuitybrands.com
          </LinkItem>

          <LinkTitle>nLight AIR:</LinkTitle>
          <LinkItem href="mailto:nLightAIR-Support@acuitybrands.com" target="_blank">
            nLightAIR-Support@acuitybrands.com
          </LinkItem>

          <LinkTitle>Sensor Switch:</LinkTitle>
          <LinkItem href="mailto:SSI-Support@acuitybrands.com" target="_blank">
            SSI-Support@acuitybrands.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Lighting Controls made Easy</Slogan>
        </CompanyContainer>
        <SocialContainer>

      <SocialIcons >
        <a href="https://www.acuitybrands.com/products/controls" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }}>
          <RiProductHuntLine size="3rem" /><Span1>Acuity Controls</Span1>
        </a>
      </SocialIcons>

        <SocialIcons >
        <a href="https://visual-3d.com/software/downloadvisualcontrols.aspx" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }}>
          <CgSoftwareDownload size="3rem" /><Span1>Visual Controls</Span1>
        </a>
      </SocialIcons>

        <SocialIcons >
            <a href="/Form" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }}>
          <AiOutlineForm size="3rem" /><Span1>Formularios</Span1>
        </a>
      </SocialIcons>

          </SocialContainer>
      </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
