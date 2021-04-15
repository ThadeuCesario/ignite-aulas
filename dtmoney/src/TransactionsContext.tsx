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
 * No typescript podemos utilizar o Omit ou o Pick para reaproveitamos interfaces já criadas.
 * O Pick selecionamos especificamente tipos de uma determinada interface, enquanto o Omit
 * basicamente pegamos toda a interface e removemos os elementos desejados.
 * 
 * Omit: 
 * type newTransaction = Omit<Transaction, 'id' | 'createdAt'>
 * 
 * Pick: 
 * type newTransaction = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>
 */

type newTransaction = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

/**
 * Sempre que precisarmos tipar um children, podemos utilizar o ReactNode importando direto de react
 * O ReactNode basicamente aceita qualquer conteúdo valido para o React.
 */

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction: newTransaction) => void,
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider(props: TransactionsProviderProps) {
    const {children} = props;
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    function createTransaction(transaction: newTransaction) {
        api.post('/transactions', transaction);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}