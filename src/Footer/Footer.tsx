import React from 'react';
import styles from './footer.css';

export function Footer() {
  return (
    <section className={styles.footer}>
      <p>
      © Creator by <a href='https://t.me/bananawinst' target='_blank' className={styles.link}>Andrey Korobka</a>
      </p>
    </section>
  );
}
