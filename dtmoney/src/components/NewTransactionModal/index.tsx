import {FormEvent, useState} from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg';
import {Container, TransactionTypeContainer, RadioBox} from './styles';

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean,
    handleToggleTransactionModalOpen: () => void,
}

function NewTransactionModal(props: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('');
    const {isNewTransactionModalOpen, handleToggleTransactionModalOpen} = props;

    const [type, setType] = useState('deposit'); 

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        console.log({title, value, category, type});

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

                <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>

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