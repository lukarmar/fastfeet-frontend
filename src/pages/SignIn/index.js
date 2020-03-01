import React, { useRef } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/core';
import { PulseLoader } from 'react-spinners';

import Input from '~/components/Input';
import logo from '~/assets/logo_login.png';
import { Container, BoxLogin, BoxForm, BoxInput } from './styles';

import { signRequest } from '~/store/modules/auth/action';

export default function SignIn() {
  const refForm = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data) {
    try {
      refForm.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });
      dispatch(signRequest(data.email, data.password));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        refForm.current.setErrors(validationErrors);
      }
    }
  }
  console.tron.log(loading);
  return (
    <Container>
      <BoxLogin>
        <img src={logo} alt="logo" />
        <BoxForm ref={refForm} onSubmit={handleSubmit}>
          <BoxInput>
            <Input
              label="seu e-mail"
              name="email"
              placeholder="exemplo@email.com"
            />
          </BoxInput>
          <BoxInput>
            <Input
              type="password"
              label="sua senha"
              name="password"
              placeholder="***********"
            />
          </BoxInput>
          <button type="submit">
            {loading ? (
              <PulseLoader size={15} color="#fff" />
            ) : (
              'Entrar no sistema'
            )}
          </button>
        </BoxForm>
      </BoxLogin>
    </Container>
  );
}
