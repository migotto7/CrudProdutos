import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddProd from '../components/AddProd';
import ProdsList from '../components/ProdsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditProd from '../components/EditProd';
import ProdsContext from '../context/ProdsContext';

const AppRouter = () => {
  const [prods, setProds] = useLocalStorage('prods', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <ProdsContext.Provider value={{ prods, setProds }}>
            <Switch>
              <Route component={ProdsList} path="/" exact={true} />
              <Route component={AddProd} path="/add" />
              <Route component={EditProd} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </ProdsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;