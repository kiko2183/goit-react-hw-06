// src/components/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ id, name, number, onDelete }) => (
  <li className={styles.contact}>
    <div className={styles.info}>
      <FaUser className={styles.icon} />
      <p>{name}</p>
    </div>
    <div className={styles.info}>
      <FaPhone className={styles.icon} />
      <p>{number}</p>
    </div>
    <button className={styles.deleteButton} onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default Contact;
