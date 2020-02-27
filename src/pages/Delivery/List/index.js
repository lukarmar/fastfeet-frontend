import React from 'react';
import { Link } from 'react-router-dom';

import { FaSearch, FaPlus } from 'react-icons/fa';
import { Container, BoxHeader, BoxTable } from './styles';

export default function List() {
  return (
    <Container>
      <BoxHeader>
        <strong>Gerenciando encomendas</strong>
        <div>
          <div className="boxInput">
            <div>
              <FaSearch color="#999999" size="16" />
            </div>
            <input name="search" placeholder="Buscar por encomendas" />
          </div>
          <Link to="/delivery/register">
            <FaPlus />
            Cadastrar
          </Link>
        </div>
      </BoxHeader>
      <BoxTable>
        <h1>alguma coisa ainda</h1>
      </BoxTable>
    </Container>
  );
}
