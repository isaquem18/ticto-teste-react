import styles from './summary.module.scss';

//  icons
import IncomeIcon from '../../assets/income.svg';
import OutcomeIcon from '../../assets/outcome.svg';
import { TransactionProps } from '../../context/TransactionContext/types';
 
import { SummaryCard } from './SummaryCard';
import { useTransaction } from '../../context/TransactionContext';

export function Summary () {
  const { transactionList } = useTransaction();


  let incomesAmount: number = 0;
  let outcomesAmount: number = 0;
  let totalAmount: number = 0;

  transactionList.forEach(item => {
    switch (item.type) {
      case 'income': 
        incomesAmount += item.amount;
        break; 
      case 'outcome': 
        outcomesAmount += item.amount;
        break; 
    }
  })

  totalAmount = incomesAmount + -outcomesAmount;

  return (
    <header className={styles.container}>
      <div className={styles.innerContainer}>
        <SummaryCard 
          title='Entradas'
          icon={IncomeIcon}
          amount={incomesAmount}
        />
        <SummaryCard 
          title='Saídas'
          icon={OutcomeIcon}
          amount={outcomesAmount}
        />
        <SummaryCard 
          title='Total'
          amount={totalAmount}
          color={true}
        />
      </div>
    </header>
  )
}