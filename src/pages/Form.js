import React from 'react';
import { Layout } from '../layout/Layout';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import Downloads from '../components/Downloads/Downloads';


const Form = () => {
    return (
        <Layout>
            <Section>
                <SectionTitle>Descarga Hoy! las guías que necesitas</SectionTitle>
                <SectionText>Aquí encontrarás instrucciones desde cómo crear un RFA hasta qué información necesitas antes de solicitar un diseño de controles.</SectionText>
                <Downloads />
            </Section>
        </Layout>
    );
};

export default Form
