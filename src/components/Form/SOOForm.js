import React from 'react'
import { useFormik } from 'formik';
import { Form, Label } from './SOOFormStyles'


const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }
    
}



const SOOForm = () => {

    const formik = useFormik({
        //first property is initialValues, this property contains an object, this object contains all the values
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

    });


    return (
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
            <label htmlFor='password'>Password:</label>
            <input type='text' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />

            <button type='submit'>Submit</button>
           
        </form>
    )
}

export default SOOForm
