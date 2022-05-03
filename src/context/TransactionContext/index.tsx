import { createContext, ReactNode, useContext, useState } from "react";
import { TransactionListProps, TransactionContext } from "./types";

const TransactionContext = createContext<TransactionContext>({} as TransactionContext);

type Props = {
  children: ReactNode;
}

export function TransactionProvider ({ children }: Props) {
  const [ transactionList, setTransactionList ] = useState<TransactionListProps>([] as TransactionListProps);

  return (
    <TransactionContext.Provider value={{ transactionList, setTransactionList }}>
      { children }
    </TransactionContext.Provider>
  )
};

export function useTransaction() {
  const data = useContext(TransactionContext);

  return data;
};
