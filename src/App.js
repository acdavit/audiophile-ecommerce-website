import { Routes, Route } from 'react-router';
import './App.css';
import Header from './shared-components/header/Header';
import HomePage from './pages/home-page/HomePage';
import Footer from './shared-components/footer/Footer';
import CategoryPage from './pages/category-page/CategoryPage';
import data from './data.json';
import ProductPage from './pages/product-page/ProductPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';
import { useEffect } from 'react';

function App() {
  useEffect(() => document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px"));
  
  return (<div id='app'>
    <Header/>
    <div id='content-container'>
      <Routes> 
        <Route path='/' element={<HomePage/>} />
        <Route path='/checkout' element={<CheckoutPage />}/>
        <Route path='/headphones' element={<CategoryPage category='headphones'/>} />
        <Route path='/speakers' element={<CategoryPage category='speakers'/>} />
        <Route path='/earphones' element={<CategoryPage category='earphones'/>} />
        {data.map((product, key) => (
          <Route key={key} path={'/product/' + product.slug} element={<ProductPage product={product}/>}/>
        ))}
      </Routes>
    </div>
    <Footer/>
  </div>);
}

export default App;
