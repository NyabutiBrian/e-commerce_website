import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Category from './pages/Category';
import Product from './pages/Product';
import Order from './pages/Order';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
