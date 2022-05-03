import styles from './table-transactions.module.scss';
import TrashIcon from '../../../assets/trash.svg';

import { TransactionProps } from '../../../context/TransactionContext/types';
import Image from 'next/image';

type Props = TransactionProps & {
  handleDeleteTransaction: (id: string) => void;
};

export function TableRow ({
  id,
  description,
  amount,
  category,
  type,
  date,
  handleDeleteTransaction
}: Props) {

  const formattedDate = Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date(date));

  const hour = new Date().getHours();
  const minute = new Date().getMinutes();

  return (
    <header className={styles.container}>
      <div className={styles.description}>{description}</div>
      <div className={`${styles.amount, 
        type === 'income' ? styles.income : styles.outcome
      }`}>{amount}</div>
      <div className={styles.category}>{category}</div>
      <div className={styles.date}>
        {formattedDate} às {hour}h{minute}
      <button 
        className={styles.trash}
        onClick={() => handleDeleteTransaction(id)}
      >
        <Image  src={TrashIcon} alt="trash-icon" />
      </button>
      </div>
    </header>
  )
}