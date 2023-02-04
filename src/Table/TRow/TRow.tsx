import React, { ReactNode } from 'react';
import styles from './trow.css';

interface ITRow  {
  children: ReactNode
  className?: string
}

export function TRow({children, className}: ITRow) {
  return (
    <tr className={styles.className}>
      {children}
    </tr>
  );
}
