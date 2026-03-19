import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Hero from "./components/Hero";
import CategoryHero from "./components/CategoryHero";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";
import Contacto from "./components/Contacto"; 
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje={<Hero />} />} />
          <Route
            path="/category/:type"
            element={<ItemListContainer mensaje={<CategoryHero />} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
