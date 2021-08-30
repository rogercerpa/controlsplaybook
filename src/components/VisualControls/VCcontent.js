import React from 'react'
import { Section, SectionText, SectionTitle, UtilityList, ExternalLinks } from './VCcontentStyle'
import { VCinfo } from '../../constants/constants'

const VCcontent = () => {
    return (
        <div>
            <iframe width="600" height="400" src="https://www.youtube.com/embed/lxAkJ9QCs_M?controls=1">
            </iframe>
            
            {VCinfo.map(({ id, title, description, video, instructions, download, youtube }) => (
                <Section key={id}>
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
