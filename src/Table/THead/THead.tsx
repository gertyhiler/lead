import React from 'react';
import { TRow } from '../TRow';
import styles from './thead.css';

export function THead() {
  return (
    <thead className={styles.thead}> 
       <TRow>
        <th className={`${styles.th} ${styles.title}`}>ФИО</th>
        <th className={`${styles.th} ${styles.title}`}>Кол-во заявок</th>
      </TRow>
    </thead>
  );
}
