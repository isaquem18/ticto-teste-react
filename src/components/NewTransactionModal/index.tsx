import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import CloseIcon from '../../assets/close.svg';
import { TransactionTypeContainer } from './TransactionTypeContainer';

import styles from './modal.module.scss';
import { useTransaction } from '../../context/TransactionContext';
import { TransactionListProps } from '../../context/TransactionContext/types';

type ModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
};

export function NewTransactionModal ({
  modalIsOpen,
  closeModal
}:ModalProps) {
  const [ description, setDescription ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ type, setType ] = useState('');
  const [ category, setCategory ] = useState('');

  const { transactionList, setTransactionList } = useTransaction();

  const clearState = () => {
    setDescription('');
    setAmount('');
    setType('');
    setCategory('');
  };

  const handleSetType = (prop: string) => {
    setType(prop);
  };

  useEffect(() => {
    clearState()
    closeModal();
  }, [ transactionList ])

  const handleSubmitNewTransactionForm = (event: any) => {
    event.preventDefault();

    if (category.length === 0 || description.length === 0 || type.length === 0 || amount.length === 0) {
      return;
    };

    const newValue: TransactionListProps = [ ...transactionList, {
      id: String(uuidv4()),
      description,
      amount: Number(amount),
      category,
      type,
      date: String(new Date())
    } ];
    
    setTransactionList(newValue);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => {
        closeModal();
        clearState();
      }}
      contentLabel="Example Modal"
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
    <h2>Cadastrar Transação</h2>
    <button 
      onClick={closeModal}  
      className={styles.closeModalButton}
    >
      <Image src={CloseIcon} alt="close modal icon" />
    </button>
    <form onSubmit={handleSubmitNewTransactionForm}>
        <input
          placeholder="Nome"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <input
          type="number"
          placeholder="Preço"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />

        <TransactionTypeContainer handleSetType={handleSetType} bgType={type} />

        <input
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />

        <button
          type="submit"
        >Cadastrar</button>

      </form>
  </Modal>
  )
}