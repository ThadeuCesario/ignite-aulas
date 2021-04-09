import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import {Container} from './styles';

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean,
    handleToggleTransactionModalOpen: () => void,
}

function NewTransactionModal(props: NewTransactionModalProps) {
    const {isNewTransactionModalOpen, handleToggleTransactionModalOpen} = props;
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
            
            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título"/>

                <input type="number" placeholder="Valor"/>

                <input placeholder="Categoria"/>

                <button type="submit">
                    Cadastrar
                </button>
            </Container>

      </Modal>
    )
}

export default NewTransactionModal