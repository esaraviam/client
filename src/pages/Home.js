import { NavBar } from '../components/NavBar';
import { ProductList } from '../components/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ShoppingCart } from './ShopingCart';

function Home() {
  return (
    <Router>
      <div className="container mx-auto">
        <NavBar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          {/* <Route path="/product-detail">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
