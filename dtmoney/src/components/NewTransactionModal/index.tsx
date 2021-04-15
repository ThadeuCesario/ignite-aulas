import {FormEvent, useState, useContext} from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg';
import {Container, TransactionTypeContainer, RadioBox} from './styles';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean,
    handleToggleTransactionModalOpen: () => void,
}

function NewTransactionModal(props: NewTransactionModalProps) {
    const {createTransaction} = useContext(TransactionsContext);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('');
    const {isNewTransactionModalOpen, handleToggleTransactionModalOpen} = props;

    const [type, setType] = useState('deposit'); 

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTransaction({
            title, amount, category, type
        })
    }

    return (
        <Modal 
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleToggleTransactionModalOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >
            <button
                type="button"
                onClick={handleToggleTransactionModalOpen}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal"/>
            </button>
            
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>

                <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))}/>

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        activeColor="green"
                        onClick={() => {
                            setType('deposit')
                        }}
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        onClick={() => {
                            setType('withdraw')
                        }}
                    >
                        <img src={outcomeImg} alt="Saida"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>

      </Modal>
    )
}

export default NewTransactionModal