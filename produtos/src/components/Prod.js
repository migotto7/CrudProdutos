import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Prod = ({
  id,
  prodnome,
  marca,
  descricao,
  preco,
  quantidade,
  date,
  handleRemoveProd
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="prod">
      <Card.Body>
        <Card.Title className="prod-title">{prodnome}</Card.Title>
        <div className="prod-details">
          <div>Marca: {marca}</div>
          <div>Descrição: {descricao}</div>
          <div>Quantidade: {quantidade} </div>
          <div>Preço: {preco} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Editar
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveProd(id)}>
          Deletar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Prod;