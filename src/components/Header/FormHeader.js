import Link from 'next/link';
import React from 'react';
import { AiOutlineControl, AiOutlineForm  } from 'react-icons/ai';
import { RiProductHuntLine } from 'react-icons/ri'
import {CgSoftwareDownload} from 'react-icons/cg'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Span1 } from './HeaderStyles';

const FormHeader = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center",  color: "white", marginBottom:"10px" }}>
        <AiOutlineControl size="6rem" /> <Span>Controls PlayBook</Span>
      </a>
      </Link>
    </Div1>

    <Div3>

      <SocialIcons >
        <a href="https://www.acuitybrands.com/products/controls" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white" }} rel="noopener">
          <RiProductHuntLine size="3rem" /><Span1>Acuity Controls</Span1>
        </a>
      </SocialIcons>

        <SocialIcons >
        <a href="https://visual-3d.com/software/downloadvisualcontrols.aspx" target="_blank" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white" }} rel="noopener">
          <CgSoftwareDownload size="3rem" /><Span1>Visual Controls</Span1>
        </a>
      </SocialIcons>

        <SocialIcons >
        <a href="/Form" style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white" }}>
          <AiOutlineForm size="3rem" /><Span1>Formularios</Span1>
        </a>
      </SocialIcons>



    </Div3>
  </Container>
);

export default FormHeader;
