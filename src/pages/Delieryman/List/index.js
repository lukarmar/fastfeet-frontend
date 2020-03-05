import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlus, FaEllipsisH, FaCircle } from 'react-icons/fa';

import { verifyStatus } from '~/util/veriryStatus';
import api from '~/services/api';

import Action from './Action';

import {
  Container,
  BoxHeader,
  BoxTable,
  ListTable,
  LetterInAvatar,
} from './styles';

import { colors } from '~/util/colors';

export default function ListDeliveryman() {
  const [delivery, setDelivery] = useState([]);
  const [visible, setVisible] = useState(false);

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
        <strong>Gerenciando entregadores</strong>
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
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#01</td>
              <td>
                <LetterInAvatar
                  name="Marcos Meideiros"
                  size={35}
                  round
                  color={LetterInAvatar.getRandomColor('sitebase', [
                    'red',
                    'green',
                    'blue',
                  ])}
                />
              </td>
              <td>Carlos Augusto</td>
              <td>carlos@gmail.com</td>
              <td>
                <div className="boxOptions">
                  <FaEllipsisH
                    size="16"
                    onClick={() => {
                      setVisible(!visible);
                    }}
                  />
                </div>
                {visible && <Action />}
              </td>
            </tr>
          </tbody>
        </ListTable>
      </BoxTable>
    </Container>
  );
}
