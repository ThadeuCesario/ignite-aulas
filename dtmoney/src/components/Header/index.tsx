import logoImg from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <img src={logoImg} alt="dt money"/>
      <button type="button">Nova transação</button>
    </header>
  )
}

export default Header;