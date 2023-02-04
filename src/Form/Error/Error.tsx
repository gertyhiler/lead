import React from 'react';
import styles from './error.css';

export function Error({text}:{text: string}) {
  return (
      <div className={styles.form__error}>
          <div className={styles.errorbox_all}>
            <div className={styles.form__errorbox_text}>
              <p className={styles.form__errorbox_item }>{ text }</p>
            </div>
          </div>
      </div>
  );
}
