import { Container } from './styles';
import Summary from '../Summary';
import TransactionsTable from '../TransactionsTable';

function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
} 

export default Dashboard;