import React from 'react';
import styles from '../../styles/empleos/SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}


export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputWrapper}>
        <span
          className="iconify"
          data-icon="lucide:search"
          style={{ fontSize: '18px' }}
        ></span>
        <input
          type="text"
          placeholder="Búsqueda"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
