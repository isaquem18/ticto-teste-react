import styles from './table-transactions.module.scss';
import { TableRow } from './TableRow';
import { useTransaction } from '../../context/TransactionContext';

export function TableTransactions () {
  const { transactionList, setTransactionList } = useTransaction();

  const handleDeleteTransaction = (id: string) => {
    const newList = transactionList.filter(item => item.id !== id);
    setTransactionList(newList);
  }

  return (
    <header className={styles.container}>
      {transactionList.length > 0 ? (
        <header className={styles.thead}>
          <div className={styles.description}>Descrição</div>
          <div className={styles.amount}>Valor</div>
          <div className={styles.category}>Categoria</div>
          <div className={styles.date}>Data</div>
        </header>
      ) : (
        <h2 className={styles.notFoundItem}>Não há itens cadastrados</h2>
      )}
      {
        transactionList.map((item) => (
          <TableRow 
            key={item.id}
            id={item.id}
            description={item.description}
            category={item.category}
            type={item.type}
            amount={item.amount}
            date={item.date}
            handleDeleteTransaction={handleDeleteTransaction}
          />
        ))
      }
    </header>
  )
}