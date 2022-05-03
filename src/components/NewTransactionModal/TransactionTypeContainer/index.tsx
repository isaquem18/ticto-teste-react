import { useState } from 'react';
import Image from 'next/image';

import IncomeIcon from '../../../assets/income_modal.svg';
import OutcomeIcon from '../../../assets/outcome_modal.svg';

import styles from './transaction-type.module.scss';

interface TransactionTypeContainerProps {
  handleSetType: (prop: string) => void;
  bgType: string;
}


export function TransactionTypeContainer({ handleSetType, bgType }: TransactionTypeContainerProps) {
  return (
    <div className={styles.container}>
      <button 
        type="button" 
        onClick={() => handleSetType('income')} 
        className={`${bgType === 'income' ? styles.isIncomeActive : null}`} 
      >
        <Image src={IncomeIcon} alt="income" />
        <span>Entrada</span>
      </button>
      <button 
        type="button" 
        onClick={() => handleSetType('outcome')}     
        className={`${bgType === 'outcome' ? styles.isOutcomeActive : null}`} 
      >
        <Image src={OutcomeIcon} alt="outcome" />
        <span>Saída</span>
      </button>
    </div>
  )
}