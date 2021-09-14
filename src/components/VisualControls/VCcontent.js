import React from 'react'
import { Section, SectionText, SectionTitle, UtilityList, ExternalLinks, IFrame } from './VCcontentStyle'
import { VCinfo } from '../../constants/constants'

const VCcontent = () => {
    return (
        <div>
            {VCinfo.map(({ id, title, description, video, instructions, download, youtube }) => (
                <Section key={id}>
                    <IFrame  src={video}>
                    </IFrame> 
                    <SectionTitle>{title}</SectionTitle>
                    <SectionText>{description}</SectionText>
                    <UtilityList>
                        <ExternalLinks href={download} target="_blank">Descarga</ExternalLinks>
                        <ExternalLinks href={instructions} target="_blank">Instrucciones</ExternalLinks>
                        <ExternalLinks href={youtube} target="_blank">Tutorial</ExternalLinks>
                    </UtilityList>
                    
                </Section>
            ))}
            
        </div>
    )
}

export default VCcontent
