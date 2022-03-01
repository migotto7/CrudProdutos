import React, { useContext } from 'react';
import ProdForm from './ProdForm';
import ProdsContext from '../context/ProdsContext.js';

const AddProd = ({ history }) => {
  const { prods, setProds } = useContext(ProdsContext);

  const handleOnSubmit = (prod) => {
    setProds([prod, ...prods]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ProdForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddProd;