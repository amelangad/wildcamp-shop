import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Offert from './pages/Offert';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Loading from './components/Loading'
import { AnimatePresence } from 'framer-motion';
import CartProvider  from './context/CartContext'

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }
    , [])
  
  return (
    <CartProvider>
      {loading ?
        <Loading />
        :
      <AnimatePresence>
        <Routes location={location} key={location.pathame}>
          <Route index element={<Home />} />
          <Route path="/offert" element={<Offert />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
}
    </CartProvider>


  );
}

export default App;
