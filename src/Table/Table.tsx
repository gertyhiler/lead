import React from 'react';
import { IData } from '../hook/useTableData';
import styles from './table.css';
import { TBody } from './TBody';
import {THead} from './THead';

export interface ITable {
  data: IData | undefined
}

export function Table() {
  return (
    <table className={styles.table}>
      <THead/>
      <TBody/>
    </table>
  );
}
