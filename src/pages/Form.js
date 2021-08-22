import React from 'react';
import { Layout } from '../layout/Layout';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import SOOForm from '../components/Form/SOOForm';


const Form = () => {
    return (
       
        <Layout>
            <Section>
                <SectionTitle>Crea tu secuencia de operacion</SectionTitle>
                <SectionText>Ingresa toda la informacion necesaria para tu diseno de control</SectionText>
                <SOOForm/>
            </Section>
        </Layout>
    );
};

export default Form
