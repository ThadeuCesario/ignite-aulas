import {useState} from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import GlobalStyle from "./styles/global";
import NewTransactionModal from './components/NewTransactionModal';
import {TransactionsContext} from './TransactionsContext';

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const handleToggleTransactionModalOpen = () => setIsNewTransactionModalOpen(!isNewTransactionModalOpen);

  return (
    <TransactionsContext.Provider value={[]}>
      <Header onToggleTransactionModalOpen={handleToggleTransactionModalOpen}/>
      <Dashboard />
      <NewTransactionModal isNewTransactionModalOpen={isNewTransactionModalOpen} handleToggleTransactionModalOpen={handleToggleTransactionModalOpen}/>
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

export default App;
