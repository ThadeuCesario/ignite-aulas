import {useState, createContext, useEffect, ReactNode} from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

/**
 * Sempre que precisarmos tipar um children, podemos utilizar o ReactNode importando direto de react
 * O ReactNode basicamente aceita qualquer conteúdo valido para o React.
 */

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider(props: TransactionsProviderProps) {
    const {children} = props;
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}