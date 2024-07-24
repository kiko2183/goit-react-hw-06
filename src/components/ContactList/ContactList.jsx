// src/components/ContactList/ContactList.jsx
import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id} id={id} name={name} number={number} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactList;
