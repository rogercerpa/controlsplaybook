import React from 'react';
import { Layout2 } from '../layout/Layout2';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import RFALifeCycle from '../components/RFACyle/RFALifeCycle';

const RFACycle = () => {
    return (
        <Layout2>
            <Section>
                  <SectionTitle>RFA Ciclo Vital</SectionTitle>
                <SectionText>Muy importante entender el ciclo de vida de un RFA, para asi mantener el contenido del proyecto organizado y el flujo del proceso lo mas sencillo posible.</SectionText>
                <RFALifeCycle />
            </Section>
        </Layout2>
    )
}

export default RFACycle
