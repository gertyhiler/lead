import React from 'react';
import styles from './button.css';

interface Props {
  text: string,
  onClick: () => void
}

export function Button({text, onClick}:Props) {
  return (
      <button className={styles.button} onClick={onClick}>{text}</button>
  );
}
