import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TheCraft from './pages/TheCraft';
import Artisans from './pages/Artisans';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Support from './pages/Support';
import Placeholder from './pages/Placeholder';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/the-craft" element={<TheCraft />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Placeholder title="Log In" />} />
          <Route path="/wishlist" element={<Placeholder title="Wishlist" />} />
          <Route path="/cart" element={<Placeholder title="Cart" />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
