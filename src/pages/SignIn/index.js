import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Input from '~/components/Input';
import logo from '~/assets/logo_login.png';
import { Container, BoxLogin, BoxForm, BoxInput } from './styles';

import { signRequest } from '~/store/modules/auth/action';

export default function SignIn() {
  const refForm = useRef(null);
  const dispach = useDispatch();
  const [resetMargin, setResetmargin] = useState();

  async function handleSubmit(data) {
    try {
      setResetmargin(false);
      refForm.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });
      dispach(signRequest(data.email, data.password));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setResetmargin(true);
        console.tron.log(resetMargin);
        refForm.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <BoxLogin>
        <img src={logo} alt="logo" />
        <BoxForm ref={refForm} onSubmit={handleSubmit}>
          <BoxInput resetMargin={resetMargin}>
            <Input
              label="seu e-mail"
              name="email"
              placeholder="exemplo@email.com"
            />
          </BoxInput>
          <BoxInput resetMargin={resetMargin}>
            <Input
              type="password"
              label="sua senha"
              name="password"
              placeholder="***********"
            />
          </BoxInput>
          <button type="submit">Entrar no sistema</button>
        </BoxForm>
      </BoxLogin>
    </Container>
  );
}
