import React from 'react';
import Reset from "./styles/Reset";
import * as Styled from './styles/Styles';

function App() {
  return (
    <>
      <Reset />
      <Styled.Container>
        <Styled.Header>
          <Styled.HeaderText>Sistema Financeiro</Styled.HeaderText>
        </Styled.Header>
        <Styled.Body>
          Body
        </Styled.Body>
      </Styled.Container>
    </>
  );
}

export default App;
