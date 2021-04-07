import {useState} from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import GlobalStyle from "./styles/global";
import NewTransactionModal from './components/NewTransactionModal';

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const handleToggleTransactionModalOpen = () => setIsNewTransactionModalOpen(!isNewTransactionModalOpen);

  return (
    <>
      <Header onToggleTransactionModalOpen={handleToggleTransactionModalOpen}/>
      <Dashboard />
      <NewTransactionModal isNewTransactionModalOpen={isNewTransactionModalOpen} handleToggleTransactionModalOpen={handleToggleTransactionModalOpen}/>
      <GlobalStyle />
    </>
  );
}

export default App;
