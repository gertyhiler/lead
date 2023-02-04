import React from 'react';
import styles from './tcell.css';

type ITCell = {
  text: string | number
}

export function TCell({text}:ITCell) {
  return (
    <td className={`${styles.td} ${styles.text}`}>
      {text}
    </td>
  );
}
