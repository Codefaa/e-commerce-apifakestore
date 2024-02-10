import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Encabezado from './Componentes/Encabezado/Encabezado';
import Pie from './Componentes/Pie/Pie';
import Inicio from './Componentes/Inicio/Inicio';
import Contacto from './Componentes/Contacto/Contacto';
import ProductoDetalle from './Componentes/ProdocutoDetalle/ProductoDetalle';
import { CartProvider } from './Context/CartContext';
import Carrito from './Componentes/Compra/Carrito';
import ProductoLista from './Componentes/ProductoLista/ProductoLista';
import { FavoritosProvider } from './Context/FavoritoContext';
import Pago from './Componentes/Pago/Pago';
import { useState } from 'react';

function App() {
  const [busqueda, setBusqueda] = useState(""); // Estado para los términos de búsqueda

  const handleSearch = (terminoBusqueda) => {
    setBusqueda(terminoBusqueda); // Actualizar los términos de búsqueda
  };

  return (
    <div className="App">
      <CartProvider>
        <FavoritosProvider>

          <BrowserRouter basename="/e-commerce-fakestore">

            <Encabezado onSearch={handleSearch} busqueda={busqueda} /> {/* Pasa los términos de búsqueda al Encabezado */}

            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/productos/:id' element={<ProductoDetalle />} />
              {/* Pasa los términos de búsqueda al componente ProductoLista */}
              <Route path='/productos' element={<ProductoLista busqueda={busqueda} />} />
              <Route path=':categoria' element={<ProductoLista busqueda={busqueda} />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/pago' element={<Pago />} />
            </Routes>

            <Pie />

          </BrowserRouter>
          
        </FavoritosProvider>
      </CartProvider>
    </div>
  );
}

export default App;
