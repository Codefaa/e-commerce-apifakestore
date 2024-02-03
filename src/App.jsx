import './App.css';
import Coleccion from './Componentes/Coleccion/Coleccion';
import Encabezado from './Componentes/Encabezado/Encabezado';
import Pie from './Componentes/Pie/Pie';

function App() {

  return (
    <div className="App">
      <Encabezado />
      <Coleccion />
      <Pie />
    </div>
  );
}

export default App;
