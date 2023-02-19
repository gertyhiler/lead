import React from 'react';
import { Button } from '../../components/Button';
import styles from './erorr.css';

export function Erorr() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Ошибка при загрузке данных таблицы</span>
      <Button text='Перезагрузить' onClick={() => {
        window.history.go(0)
      }}/>
    </div>
  );
}
