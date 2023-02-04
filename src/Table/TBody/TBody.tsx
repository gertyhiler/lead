import React, { useContext } from 'react';
import { dataContext } from '../../context/formContext';
import { TCell } from '../TCell';
import { TRow } from '../TRow';
import styles from './tbody.css';

export function TBody() {
  return (
    <dataContext.Consumer> 
      {data => (
        <tbody className={styles.tbody}>

            {data?.result.map((row, index) => {
              if (row[0] === '') return;
              return (
                <TRow key={index}>
                  <TCell text={row[0]}/>
                  <TCell text={row[1]}/>
                </TRow>
              )
            })}
            </tbody>
      )}
    
    </dataContext.Consumer>
  );
}
