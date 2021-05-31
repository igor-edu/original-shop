import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import ProductsFeaturePage from './pages/ProductsFeaturePage';
import ProductsIndividualPage from './pages/ProductsIndividualPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='App'>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/about' component={AboutPage}></Route>
            <Route
              path='/products/features/:feature'
              component={ProductsFeaturePage}
            />
            <Route
              path='/products/individual/:id'
              component={ProductsIndividualPage}
            />
            <Route path='/cart' component={CartPage} />
            <Route path='/wishlist' component={WishlistPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
