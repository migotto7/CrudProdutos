import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Produtos</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Produtos
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Produto
        </NavLink>
      </div>
    </header>
  );
};

export default Header;