import React, { useContext } from 'react';
import _ from 'lodash';
import Prod from './Prod';
import ProdsContext from '../context/ProdsContext.js';

const ProdsList = () => {
  const { prods, setProds } = useContext(ProdsContext);

  const handleRemoveProd = (id) => {
    setProds(prods.filter((prod) => prod.id !== id));
  };

  return (
    <React.Fragment>
      <div className="prod-list">
        {!_.isEmpty(prods) ? (
          prods.map((prod) => (
            <Prod key={prod.id} {...prod} handleRemoveProd={handleRemoveProd} />
          ))
        ) : (
          <p className="message">Sem produtos, por favor adicione.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProdsList;