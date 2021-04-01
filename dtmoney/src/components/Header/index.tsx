import logoImg from '../../assets/logo.svg';
import {Container, Content} from './styles';

interface HeaderProps {
  onToggleTransactionModalOpen: () => void,
}

function Header(props: HeaderProps) {
  const {onToggleTransactionModalOpen} = props;
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={onToggleTransactionModalOpen}>Nova transação</button>
      </Content>
    </Container>
  )
}

export default Header;