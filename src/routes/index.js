// Va a ser el entry point de todas las rutas
// BrowserRouter → Contexto (estado global) | → History
import { BrowserRouter as Router, Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';
import { useState } from 'react';

/*
3 formas de renderizar rutas:
1) con prop render (CUANDO QUIERO RENDERIZAR UN COMPONENTES EXERNOS E INDEPENDIENTES, SIN NECESIDAD DE PASARLE PROPS de navegacion (tipo history):
<Route path="/" render={Home} />
2) con un render con callback
<Route path="/category" render={() => <h1> Category </h1>} />
3) cuando queremos pasar una PROP a nuestro route:

*/
const Routes = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
      e.preventDefault()
      const [product] = e.target.elements;
    //   history.push("/products") not working
      setSearch(product.value)
  }
  return (
    <>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Buscar..."

      />
      </form>
      <Router>
        <Switch>
          <Route path="/" exact render={Home} />
          <Route path="/products" exact>
            <Products search={search} />
          </Route>
          <Route path="/products/:id" render={Product} />
          <Route path="/error" component={() => <h1>Error: Page not found</h1>}/>
          <Redirect to="/error" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
