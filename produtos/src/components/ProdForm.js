import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ProdForm = (props) => {
  const [prod, setProd] = useState(() => {
    return {
      prodnome: props.prod ? props.prod.prodnome : '',
      marca: props.prod ? props.prod.marca : '',
      descricao: props.prod ? props.prod.descricao : '',
      quantidade: props.prod ? props.prod.quantidade : '',
      preco: props.prod ? props.prod.preco : '',
      date: props.prod ? props.prod.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { prodnome, marca, descricao, preco, quantidade } = prod;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [prodnome, marca, descricao, preco, quantidade];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const prod = {
        id: uuidv4(),
        prodnome,
        marca,
        descricao,
        preco,
        quantidade,
        date: new Date()
      };
      props.handleOnSubmit(prod);
    } else {
      errorMsg = 'Por favor preencha todos os campos.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantidade':
        if (value === '' || parseInt(value) === +value) {
          setProd((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'preco':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setProd((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setProd((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="prodnome"
            value={prodnome}
            placeholder="Coloque o nome do produto"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="marca">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="marca"
            value={marca}
            placeholder="Coloque a marca do produto"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="descricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="descricao"
            value={descricao}
            placeholder="Coloque a descrição do produto"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantidade">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantidade"
            value={quantidade}
            placeholder="Coloque a quantidade do produto"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="preco">
          <Form.Label>Preço</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="preco"
            value={preco}
            placeholder="Coloque o preço do produto"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default ProdForm;