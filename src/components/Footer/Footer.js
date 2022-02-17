import React from 'react';
import { AiOutlineForm  } from 'react-icons/ai';
import { RiProductHuntLine, RiFacebookBoxLine, RiInstagramLine, RiLinkedinLine, RiYoutubeLine, RiTwitterLine } from 'react-icons/ri'
import { CgSoftwareDownload } from 'react-icons/cg'


import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, Span1 } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>

      <LinkList>
        <LinkColumn>
          <LinkTitle>Controles Soporte técnico:</LinkTitle>
          <LinkItem href="tel:(800) 535-2465">  (800) 535-2465</LinkItem>

          <LinkTitle>Danos tu Opinion:</LinkTitle>
          <LinkItem href="https://forms.gle/qM1C82AggZxV1T757" target="_blank" rel="noopener">  Feedback</LinkItem>
        </LinkColumn>

        <LinkColumn>

          <LinkTitle>nLight Wired:</LinkTitle>
          <LinkItem href="mailto:nLight-Support@acuitybrands.com" target="_blank" rel="noopener">
            nLight-Support@acuitybrands.com
          </LinkItem>

          <LinkTitle>nLight AIR:</LinkTitle>
          <LinkItem href="mailto:nLightAIR-Support@acuitybrands.com" target="_blank" rel="noopener">
            nLightAIR-Support@acuitybrands.com
          </LinkItem>

          <LinkTitle>Sensor Switch:</LinkTitle>
          <LinkItem href="mailto:SSI-Support@acuitybrands.com" target="_blank" rel="noopener">
            SSI-Support@acuitybrands.com
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>FAQ </LinkTitle>
          <LinkItem href='https://acuitybrands.force.com/s/' target="_blank" rel="noopener">Preguntas Frecuentes</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
      
          <SocialContainer>
            
            <SocialIcons >
              <a href="https://www.facebook.com/acuitybrands" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }} rel="noopener">
                <RiFacebookBoxLine size="3rem" />
              </a>
            </SocialIcons>

            <SocialIcons >
              <a href="https://www.instagram.com/acuitybrands/" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }} rel="noopener">
                <RiInstagramLine size="3rem" />
              </a>
            </SocialIcons>

             <SocialIcons >
              <a href="https://www.linkedin.com/company/acuitybrands/mycompany/" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }} rel="noopener">
                <RiLinkedinLine size="3rem" />
              </a>
            </SocialIcons>

             <SocialIcons >
              <a href="https://www.youtube.com/c/acuitybrands" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }} rel="noopener">
                <RiYoutubeLine size="3rem" />
              </a>
            </SocialIcons>

            <SocialIcons >
              <a href="https://twitter.com/AcuityBrands" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }} rel="noopener">
                <RiTwitterLine size="3rem" />
              </a>
            </SocialIcons>

            </SocialContainer>
        </CompanyContainer>


        <SocialContainer>

      <SocialIcons >
        <a href="https://www.acuitybrands.com/products/controls" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }} rel="noopener">
          <RiProductHuntLine size="3rem" /><Span1>Acuity Controls</Span1>
        </a>
      </SocialIcons>

        <SocialIcons >
        <a href="https://visual-3d.com/software/downloadvisualcontrols.aspx" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }} rel="noopener">
          <CgSoftwareDownload size="3rem" /><Span1>Visual Controls</Span1>
        </a>
      </SocialIcons>

        <SocialIcons >
            <a href="/Form" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white", padding: "0.8rem" }} rel="noopener">
          <AiOutlineForm size="3rem" /><Span1>Formularios</Span1>
        </a>
      </SocialIcons>

          </SocialContainer>
      </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
