import React from 'react';
import { Layout } from '../layout/Layout';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import { GridContainer, BlogCard, Img, TitleContent, HeaderThree, CardInfo, TagList, Tag, Hr, UtilityList, ExternalLinks } from '../components/Servicios/ServiciosStyles';
import SOOForm from '../components/Form/SOOForm';
import { forms } from '../constants/constants';


const Form = () => {
    return (
       
        <Layout>
            <Section>
                <SectionTitle>Crea tu secuencia de operacion</SectionTitle>
                <SectionText>Ingresa toda la informacion necesaria para tu diseno de control</SectionText>
                <GridContainer>
                    {forms.map(({id, title, subtitle, descriptions, features, image, link }) => (
                        <BlogCard key={id}>
                            <Img src={image} />
                            <TitleContent>
                                <HeaderThree title>{title }</HeaderThree>
                                <HeaderThree subTitle>{subtitle }</HeaderThree>
                                <Hr />
                            </TitleContent>
                            <CardInfo></CardInfo>
                            <TagList>
                                <Tag></Tag>
                            </TagList>
                            <UtilityList>
                                <ExternalLinks href={link} target="_blank">Download</ExternalLinks>
                            </UtilityList>
                      </BlogCard>  
                    ))}

                </GridContainer>
                {/* <SOOForm/> */}
            </Section>
        </Layout>
    );
};

export default Form
