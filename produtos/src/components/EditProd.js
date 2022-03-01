import React, { useContext } from 'react';
import ProdForm from './ProdForm';
import { useParams } from 'react-router-dom';
import ProdsContext from '../context/ProdsContext.js';

const EditProd = ({ history }) => {
  const { prods, setProds } = useContext(ProdsContext);
  const { id } = useParams();
  const prodToEdit = prods.find((prod) => prod.id === id);

  const handleOnSubmit = (prod) => {
    const filteredProds = prods.filter((prod) => prod.id !== id);
    setProds([prod, ...filteredProds]);
    history.push('/');
  };

  return (
    <div>
      <ProdForm prod={prodToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditProd;