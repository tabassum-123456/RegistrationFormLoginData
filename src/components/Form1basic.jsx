import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Form1basic = () => (
  <div>

    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if(!values.fname){
            errors.fname = 'Required';   
        }
        else if(
            !values.fname.length>2
        ){
            errors.fname = 'Min 3 characters required';   
        }

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
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="fname" label="Firs Name" />
          <ErrorMessage name="fname" component="div" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Form1basic;