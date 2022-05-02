import type { NextPage } from 'next';
import styles from '../styles/home.module.scss';

//components
import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { TableTransactions } from '../components/TableTransactions';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Summary />
      <TableTransactions />
    </div>
  )
}

export default Home
