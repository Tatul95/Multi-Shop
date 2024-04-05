import logo from './logo.svg';
import './App.css';
import './assets/style/index.scss';
import { Header } from './components/header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouterList } from './router';
import { ShopDetail } from './pages/shop detail';
import { ShoppingCart } from './pages/shopping cart';
import { Home } from './pages/home';
import {Shop} from './pages/shop';
import {Checkout} from './pages/checkout';
import {Contact} from './pages/contact';
import { Adminka } from './pages/Adminka';



function App() {
  return <div>
    <Header/>
    <Routes>
      <Route path={RouterList.HOME} element={<Home/>}/>
      <Route path={RouterList.SHOP} element={<Shop/>}/>
      <Route path={RouterList.SHOPDETAIL} element={<ShopDetail/>}/>
      <Route path={RouterList.SHOPPINGCART} element={<ShoppingCart/>}/>
      <Route path={RouterList.CHECKOUT} element={<Checkout/>}/>
      <Route path={RouterList.CONTACT} element={<Contact/>}/>
      <Route path={RouterList.ADMINKA} element={<Adminka/>}/>
      <Route path={'/*'} element={<Navigate to={RouterList.HOME}/>}/>
    </Routes>
  </div>
}

export default App;
