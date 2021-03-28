import styled from 'styled-components';

const Title = styled.h1`
  color: #f00;
  font-size: 64px;
`;

function App() {
  return (
    <div className="App">
      <Title>
        Hello World
      </Title>
    </div>
  );
}

export default App;
