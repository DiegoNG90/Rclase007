// Va a ser el entry point de todas las rutas
// BrowserRouter → Contexto (estado global) | → History
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';

/*
3 formas de renderizar rutas:
1) con prop render:
<Route path="/" render={Home} />
2) con un render con callback
<Route path="/category" render={() => <h1> Category </h1>} />
3)
*/
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={Home} />
        <Route path="/products" exact render={Products} />
        <Route path="/products/:id" render={Product} />
        <Route
            path="/category/:id"
            render={(props) => {
                console.log(props)
                return(
                    <section>
                        <h1> Category </h1>
                    </section>
                )
            }}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
