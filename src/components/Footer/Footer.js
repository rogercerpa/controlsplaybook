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
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:000-000-0000">000-000-0000</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>e-mail</LinkTitle>
          <LinkItem href="roger.cerpa@acuitybrands.com">roger.cerpa@acuitybrands.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Lighting Controls made Easy</Slogan>
        </CompanyContainer>
        <SocialContainer>
      <SocialIcons href="https://www.acuitybrands.com/products/controls" target="_blank">
        <a style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white" }}>
          <RiProductHuntLine size="3rem" /><Span1>Acuity Controls</Span1>
        </a>
      </SocialIcons>
      <SocialIcons href="https://visual-3d.com/software/downloadvisualcontrols.aspx" target="_blank">
        <a style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white" }}>
          <CgSoftwareDownload size="3rem" /><Span1>Visual Controls</Span1>
        </a>
      </SocialIcons>
      <SocialIcons href="/SOO" >
        <a style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white" }}>
          <AiOutlineForm size="3rem" /><Span1>SOO</Span1>
        </a>
      </SocialIcons>
          </SocialContainer>
      </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
