import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './components/Cart';
import NotFound from './pages/NotFound';
import Order from './pages/Order';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Cart />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={Product} />
        <Route path="/order" component={Order} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
