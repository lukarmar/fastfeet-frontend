import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logoHeader from '~/assets/logo_header.svg';

import { Container, BoxMenu, BoxUser } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.admin.profile.name);
  return (
    <Container>
      <BoxMenu>
        <div className="boxImage">
          <img src={logoHeader} alt="logo" />
        </div>
        <div className="boxLinks">
          <Link to="/delivery">Encomendas</Link>
          <Link to="/deliveryman">Entregadores</Link>
          <Link to="/recipient">Destinatários</Link>
          <Link to="/problem">Problemas</Link>
        </div>
      </BoxMenu>
      <BoxUser>
        <strong>Administrador</strong>
        <span>sair do sistema</span>
      </BoxUser>
    </Container>
  );
}
