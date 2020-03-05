import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';

import { Container, ListActions } from './styles';

export default function Action() {
  return (
    <Container>
      <div className="tag-wrap">
        <span className="tag" />
      </div>
      <ListActions>
        <li>
          <FaPen size={10} color="#4D85EE" />
          <Link to="/deliveryman/edit">Editar</Link>
        </li>
        <li>
          <FaTrash size={10} color="#DE3B3B" />
          <Link to="/">Excluir</Link>
        </li>
      </ListActions>
    </Container>
  );
}
