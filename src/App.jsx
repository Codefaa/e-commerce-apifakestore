import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Encabezado from './Componentes/Encabezado/Encabezado';
import Pie from './Componentes/Pie/Pie';
import Coleccion from './Componentes/Coleccion/Coleccion';
import Inicio from './Componentes/Inicio/Inicio';
import Producto from './Componentes/Producto/Producto';
import RopaHombre from './Componentes/RopaHombre/RopaHombre';
import RopaMujer from './Componentes/RopaMujer/RopaMujer';
import Joyeria from './Componentes/Joyeria/Joyeria';
import Electronica from './Componentes/Electronica/Electronica';
import Contacto from './Componentes/Contacto/Contacto';


function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Encabezado />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='coleccion' element={<Coleccion />} />
          <Route path='ropahombre' element={<RopaHombre />} />
          <Route path='ropamujer' element={<RopaMujer />} />
          <Route path='joyeria' element={<Joyeria />} />
          <Route path='electronica' element={<Electronica />} />
          <Route path='contacto' element={<Contacto />} />
        </Routes>

        <Pie />

      </BrowserRouter>
    </div>
  );
}

export default App;
