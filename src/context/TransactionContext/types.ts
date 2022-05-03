import React from "react";

export type TransactionProps = {
  id: string;
  description: string;
  amount: number;
  category: string;
  type: string;
  date: string;
};

export type TransactionListProps = TransactionProps[];

export type TransactionContext = {
  transactionList: TransactionListProps;
  setTransactionList: React.Dispatch<TransactionListProps>;
};