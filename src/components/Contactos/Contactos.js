import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, FormContainer, Field1, Field2, Field3 } from './ContactosStyles';
import { contactos } from '../../constants/constants';



const Contactos = () => (

  <Section nopadding id="contactos">
    <SectionDivider />
    <br />
    <SectionTitle>Contacta con nosotros</SectionTitle>
    <SectionText>Nos encantaría saber de usted, envíenos un mensaje si tiene preguntas o simplemente algun comentarios, Gracias.</SectionText>
    
    <FormContainer>

      <Formik
           initialValues={{ fullname: '', email: '', agency: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           console.log(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
      >
        {({ isSubmitting }) => (
          <Form>
          <label for='fullname'>Full Name</label>
            <Field type='text' id='frame' name='fullname' placeholder='Full name' as={Field1}></Field>
            <ErrorMessage name='fullname' component='div' />

          <label for='email'>Email</label>
            <Field type='text' id='email' name='email' placeholder='email address' as={Field1}></Field>
            <ErrorMessage name='email' component='div' />
            
          <label for='agency'>Agencia</label>
            <Field as={Field2} id='agency' name='agency'>
              <option value='0' default>Select</option>
            <option value='A001'>A001</option>
            <option value='A002'>A002</option>
            <option value='A003'>A003</option>
            </Field>
            <ErrorMessage name='agency' component='div' />
            
          <label for='message'>Mensaje</label>
            <Field3 type='text' name='message' placeholder='Tu mensaje...' ></Field3>
            <ErrorMessage name='message' component='div' />
            
          <button type='submit' disabled={isSubmitting}>Submit</button>
        </Form>   
      )}
      </Formik>
    </FormContainer>
    {/* <Boxes>
      {contactos.map(({team, id, members}) => (
        <Box key={id}>
          <BoxNum>{team}</BoxNum>
          {members.map((member, i) => (
            <BoxText key={i}>{member}</BoxText>
          ))}
          
        </Box>
      ))}
    </Boxes> */}
 </Section>
);

export default Contactos;
