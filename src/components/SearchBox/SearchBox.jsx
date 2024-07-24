// src/components/SearchBox/SearchBox.jsx
import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => (
  <div className={styles.searchBox}>
    <label htmlFor="search">Find contacts by name</label>
    <input
      id="search"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
    />
  </div>
);

export default SearchBox;
