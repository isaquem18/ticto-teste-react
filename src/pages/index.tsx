import type { NextPage } from 'next';
import styles from '../styles/home.module.scss';

//components
import { Header } from '../components/Header';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}

export default Home
