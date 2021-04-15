import {useEffect, useState, useContext} from 'react';
import {TransactionsContext} from '../../TransactionsContext';
import { api } from '../../services/api';
import { Container } from "./styles";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

function TransactionsTable() {
    const data = useContext(TransactionsContext);
    
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction => {
                            const {id, title, amount, category, type, createdAt} = transaction;
                            return (
                                <tr key={id}>
                                    <td>{title}</td>
                                    <td className={type}>
                                        {new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(amount)}
                                    </td>
                                    <td>{category}</td>
                                    <td>
                                        {new Intl.DateTimeFormat('pt-BR').format(
                                            new Date(createdAt)
                                        )}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container>
    )
}

export default TransactionsTable;