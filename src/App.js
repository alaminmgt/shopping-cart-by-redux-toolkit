import React from 'react'
import Navbar from './components/Navbar'
import ProductCart from './components/ProductCart'
import { BrowserRouter, Routes,Route} from "react-router-dom";
import CardPage from './components/CardPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<ProductCart />}/>
          <Route path="/cart" element={<CardPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
