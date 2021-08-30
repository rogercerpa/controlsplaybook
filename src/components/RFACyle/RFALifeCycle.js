import React from 'react'
import { GridContainer, GridItem, SectionText, SectionTitle, Image, UtilityList, ExternalLinks } from './RFALifeCycleStyles'
import {RFAprocess} from '../../constants/constants'

const RFALifeCycle = () => {
    return (
        <GridContainer>
            {RFAprocess.map(({ id, image, title, description, link1, link2, link1Title, link2Title }) => (
            
            <GridItem key={id}>
                <Image src={image} />
                <SectionTitle>{title}</SectionTitle>
                <SectionText>{description}</SectionText>
                 <UtilityList>
                        <ExternalLinks href={link1} target="_blank">{link1Title}</ExternalLinks>
                        <ExternalLinks href={link2} target="_blank">{link2Title}</ExternalLinks>
                </UtilityList>   
            </GridItem>
         
            
            ))}
          

        </GridContainer>
    )
}

export default RFALifeCycle
