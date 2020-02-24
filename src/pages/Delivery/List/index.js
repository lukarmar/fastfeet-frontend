import React from 'react';
import { Input as InputUi, Icon } from 'semantic-ui-react';

import Input from '~/components/Input';

import { Container, BoxHeader, BoxTable } from './styles';

export default function List() {
  return (
    <Container>
      <BoxHeader>
        <strong>Gerenciando encomendas</strong>
        <div>
          <InputUi>
            <Input
              type="search"
              name="search"
              placeholder="exemplo@email.com"
            />
          </InputUi>
          <button type="submit">Cadastra</button>
        </div>
      </BoxHeader>
      <BoxTable>
        <h1>alguma coisa ainda</h1>
      </BoxTable>
    </Container>
  );
}
