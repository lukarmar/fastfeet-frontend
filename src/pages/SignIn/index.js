import React from 'react';

import Input from '~/components/Input';
import logo from '~/assets/logo.png';
import { Container, BoxLogin, BoxForm } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <BoxLogin>
        <img src={logo} alt="logo" />
        <BoxForm onSubmit={handleSubmit}>
          <Input
            type="email"
            label="seu e-mail"
            name="email"
            placeholder="exemplo@email.com"
          />
          <Input
            type="password"
            label="sua senha"
            name="password"
            placeholder="***********"
          />
          <button type="submit">Entrar no sistema</button>
        </BoxForm>
      </BoxLogin>
    </Container>
  );
}
