import React from 'react';
import { Layout2 } from '../layout/Layout2';
import { Section, SectionText, SectionTitle, SectionDivider } from '../styles/GlobalComponents';
import VCcontent from '../components/VisualControls/VCcontent'

const VisualControls = () => {
    return (
        <Layout2>
            <Section>
                  <SectionTitle>Visual Controls</SectionTitle>
                <SectionText>El software Visual Controls admite el diseño y la especificación con Acuity Controls. Puede determinar rápidamente las cantidades de dispositivos para una oferta presupuestaria y generar una presentación profesional integral.</SectionText>
                <SectionDivider />
                <br />
                <VCcontent />
            </Section>
        </Layout2>
    )
}

export default VisualControls