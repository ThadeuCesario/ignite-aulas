import {useState} from 'react';
import Modal from 'react-modal';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import GlobalStyle from "./styles/global";

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const handleToggleTransactionModalOpen = () => setIsNewTransactionModalOpen(!isNewTransactionModalOpen);

  return (
    <>
      <Header onToggleTransactionModalOpen={handleToggleTransactionModalOpen}/>
      <Dashboard />

      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleToggleTransactionModalOpen}
        ariaHideApp={false}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;
