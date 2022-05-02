import React from 'react';
import styles from './card.module.scss';
import Image from 'Next/image';

type Props = {
  title: string;
  icon?: string;
  amount: number;
  color?: string | boolean;
}

export function SummaryCard ({
  title='',
  icon: Icon,
  amount=0,
  color=false
}: Props) {
  
  const formattedAmount = Number(amount).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <header 
      className={color ? styles.container__green : styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {Icon && <Image 
          src={Icon} 
          alt="income-logo" 
          className={styles.logo}
        />}
      </div>
      <div className={styles.amount}>{formattedAmount}</div>
    </header>
  )
}