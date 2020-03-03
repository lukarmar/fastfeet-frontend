import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';

import Select from '~/components/Select';
import Input from '~/components/Input';
import api from '~/services/api';

import { Container, BoxHeader, BoxForm } from './styles';

export default function EditDelivery() {
  return (
    <Container>
      <BoxHeader>
        <strong>Edição de encomendas</strong>
        <div className="boxButton">
          <div className="comeBack">
            <Link to="/delivery">
              <FaChevronLeft size={12} />
              Voltar
            </Link>
          </div>

          <div className="save">
            <button type="submit" to="/delivery">
              <FaCheck size={13} />
              Salvar
            </button>
          </div>
        </div>
      </BoxHeader>
      <BoxForm>
        <div className="boxSelect">
          <div>
            <Select name="recipient" label="Destinatário" />
          </div>
          <div>
            <Select name="deliveryman" label="Entregador" />
          </div>
        </div>
        <div className="boxInput">
          <Input
            name="product"
            label="Nome do Produto"
            placeholder="Nome do produto"
          />
        </div>
      </BoxForm>
    </Container>
  );
}
