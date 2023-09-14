import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transactions');

    if (query) {
      url.searchParams.append('q', query);
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setTransactions(data));
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
      }}>
      {children}
    </TransactionContext.Provider>
  )
}
