import { useState } from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import TictoLogo from '../../assets/logo.svg';

import { NewTransactionModal } from '../NewTransactionModal';


export function Header () {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <header className={styles.container}>
        <div className={styles.innerContainer}>
          <Image 
            src={TictoLogo} 
            className={styles.TictoLogo}
            alt="ticto logo"
          />

          <button 
            className={styles.newTransactionButton}
            onClick={openModal}
          >
            NOVA TRANSAÇÃO
          </button>
        </div>
      </header>
      <NewTransactionModal 
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  )
}