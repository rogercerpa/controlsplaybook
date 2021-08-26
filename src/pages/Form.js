import React from 'react';
import { Layout2 } from '../layout/Layout2';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import Downloads from '../components/Downloads/Downloads';


const Form = () => {
    return (
        <Layout2>
            <Section>
                <SectionTitle>Descarga Hoy! las guías que necesitas</SectionTitle>
                <SectionText>Aquí encontrarás instrucciones desde cómo crear un RFA hasta qué información necesitas antes de solicitar un diseño de controles.</SectionText>
                <Downloads />
            </Section>
        </Layout2>
    );
};

export default Form
