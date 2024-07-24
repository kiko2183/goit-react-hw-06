// src/components/ContactForm/ContactForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().min(3, 'Must be at least 3 characters').max(50, 'Must be 50 characters or less').required('Required'),
  number: Yup.string().required('Required'),
});

const ContactForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    }}
  >
    <Form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" className={styles.error} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="number">Number</label>
        <Field name="number" type="text" />
        <ErrorMessage name="number" component="div" className={styles.error} />
      </div>
      <button type="submit">Add contact</button>
    </Form>
  </Formik>
);

export default ContactForm;
