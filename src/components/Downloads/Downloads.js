import React from 'react'
import { GridContainer, BlogCard, Img, TitleContent, HeaderThree, CardInfo, TagList, Tag, Hr, UtilityList, ExternalLinks } from './DownloadsStyles';
import { downloads } from '../../constants/constants';


const Downloads = () => {

    return (
        <GridContainer>
                
            {downloads.map(({ id, title, subtitle, descriptions, image, link }) => (
                <BlogCard key={id}>
                    <Img src={image} />
                    <TitleContent>
                        <HeaderThree title>{title}</HeaderThree>
                        <HeaderThree subTitle>{subtitle}</HeaderThree>
                        <Hr />
                    </TitleContent>
                    <CardInfo>{descriptions}</CardInfo>
                    <TagList>
                        <Tag></Tag>
                    </TagList>
                    <UtilityList>
                        <ExternalLinks href={link} target="_blank">Descargar</ExternalLinks>
                    </UtilityList>
                </BlogCard>
            ))}

        </GridContainer>
    );
}

export default Downloads
