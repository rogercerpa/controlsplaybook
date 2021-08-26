import React from 'react'

import Footer from '../components/Footer/Footer'
import FormHeader from '../components/Header/FormHeader'
import { Container } from './LayoutStyles'

export const Layout2 = ({children}) => {
  return (
    <Container>
     <FormHeader/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}