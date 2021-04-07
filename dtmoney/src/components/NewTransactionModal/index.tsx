import Modal from 'react-modal';

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
        ariaHideApp={false}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    )
}

export default NewTransactionModal