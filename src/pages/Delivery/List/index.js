import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlus, FaEllipsisH, FaCircle } from 'react-icons/fa';

import { verifyStatus } from '~/util/veriryStatus';
import api from '~/services/api';

import {
  Container,
  BoxHeader,
  BoxTable,
  ListTable,
  LetterInAvatar,
} from './styles';

import { colors } from '~/util/colors';

export default function List() {
  const [delivery, setDelivery] = useState([]);

  useEffect(() => {
    async function getDelivery() {
      const response = await await (await api.get('/delivery')).data;
      const valor = response.map(v => ({ ...v, status: verifyStatus(v) }));

      setDelivery(valor);
    }
    getDelivery();
  }, []);

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
        <ListTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {delivery.map(data => (
              <tr>
                <td>#{data.id < 10 ? `0${data.id}` : data.id}</td>
                <td>{data.recipient.name}</td>
                <td>
                  <LetterInAvatar
                    name={data.deliveryman.name}
                    size={35}
                    round
                    color={LetterInAvatar.getRandomColor('sitebase', [
                      'red',
                      'green',
                      'blue',
                    ])}
                  />
                  <span>{data.deliveryman.name}</span>
                </td>
                <td>{data.recipient.city}</td>
                <td>{data.recipient.state}</td>
                <td>
                  <span className={data.status}>
                    <FaCircle size={10} />
                    {data.status}
                  </span>
                </td>
                <td>
                  <div className="boxOptions">
                    <FaEllipsisH size="16" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </ListTable>
      </BoxTable>
    </Container>
  );
}
