import styles from './summary.module.scss';

//  icons
import IncomeIcon from '../../assets/income.svg';
import OutcomeIcon from '../../assets/outcome.svg';
import TotalIcon from '../../assets/total.svg';
 
import { SummaryCard } from '../SummaryCard';

export function Summary () {

  return (
    <header className={styles.container}>
      <div className={styles.innerContainer}>
        <SummaryCard 
          title='Entradas'
          icon={IncomeIcon}
          amount={17400}
        />
        <SummaryCard 
          title='Saídas'
          icon={OutcomeIcon}
          amount={17400}
        />
        <SummaryCard 
          title='Total'
          amount={17400}
          color={true}
        />
      </div>
    </header>
  )
}