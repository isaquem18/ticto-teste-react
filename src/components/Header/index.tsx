import styles from './header.module.scss';
import Image from 'next/image';
import TictoLogo from '../../assets/logo.svg';

export function Header () {

  return (
    <header className={styles.container}>
      <div className={styles.innerContainer}>
        <Image 
          src={TictoLogo} 
          className={styles.TictoLogo}
          alt="ticto logo"
        />

        <button className={styles.newTransactionButton}>
          NOVA TRANSAÇÃO
        </button>
      </div>
    </header>
  )
}