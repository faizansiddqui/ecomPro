import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Page/Shop';
import ShopCategory from './Page/ShopCategory';
import Cart from './Page/Cart';
import LoginSignup from './Page/LoginSignup';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assests/banner_mens.png'
import women_banner from './Component/Assests/banner_women.png'
import kids_banner  from './Component/Assests/banner_kids.png'
import Product from './Page/Product';
import Product2 from './Page/Product2';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/products' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
       
          <Route path='/products2' element={<Product2 />}>
            <Route path=':product2Id' element={<Product2 />} />
          </Route> 

          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
