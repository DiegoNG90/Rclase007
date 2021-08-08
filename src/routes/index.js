// Va a ser el entry point de todas las rutas
// BrowserRouter → Contexto (estado global) | → History
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import Product from '../pages/Product/Product'

/*
3 formas de renderizar rutas:
1) con prop render:
<Route path="/" render={<Home />} />
2)
3)
*/
const Routes = () => {
    return (
      <Router>
        <Route path="/" render={<Home />} />
        <Route path="/products" render={<Products />} />
        <Route path="/product/1" render={<Product />} />
      </Router>
    );
}

export default Routes;