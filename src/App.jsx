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

function App() {

  return (
    <div className="App">
      <CartProvider>
        <FavoritosProvider>

          <BrowserRouter basename="/e-commerce-apifakestore">

            <Encabezado />

            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/productos/:id' element={<ProductoDetalle />} />
              <Route path='/productos' element={<ProductoLista />} />
              <Route path=':categoria' element={<ProductoLista />} />
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
