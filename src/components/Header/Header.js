import Link from 'next/link';
import React from 'react';
import { AiOutlineControl, AiOutlineForm  } from 'react-icons/ai';
import { RiProductHuntLine } from 'react-icons/ri'
import {CgSoftwareDownload} from 'react-icons/cg'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Span1 } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center",  color: "white", marginBottom:"10px" }}>
        <AiOutlineControl size="6rem" /> <Span>Controls PlayBook</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#RFA">
          <NavLink>
            RFA
          </NavLink>
        </Link>
      </li>
       <li>
        <Link href="#servicios">
          <NavLink>
            Servicios
          </NavLink>
        </Link>
      </li>
       <li>
        <Link href="#herramientas">
          <NavLink>
            Herramientas
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contactos">
          <NavLink>
            Contactos
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.acuitybrands.com/products/controls" target="_blank">
        <a style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white" }}>
          <RiProductHuntLine size="3rem" /><Span1>Acuity Controls</Span1>
        </a>
      </SocialIcons>
      <SocialIcons href="https://visual-3d.com/" target="_blank">
        <a style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white" }}>
          <CgSoftwareDownload size="3rem" /><Span1>Visual Controls</Span1>
        </a>
      </SocialIcons>
      <SocialIcons href="/Form" >
        <a style={{ display: "flex", alignItems: "center", flexDirection: "column", color: "white" }}>
          <AiOutlineForm size="3rem" /><Span1>SOO</Span1>
        </a>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
