import { useState } from 'react';
import './Filtros.css';

function BarraBusqueda({ onSearch, busqueda }) {
    const [busquedaLocal, setBusquedaLocal] = useState(busqueda);

    const handleChange = (e) => {
        const terminoBusqueda = e.target.value;
        setBusquedaLocal(terminoBusqueda);
        onSearch(terminoBusqueda);
    };

    return(
        <div className='encabezado-barra-buscador'>
            <i className="filtro bi bi-search"></i>
            <div className='buscador-contenedor'>
                <input 
                    className='buscador-text' 
                    value={busquedaLocal}
                    type="text" 
                    placeholder='Buscar...'
                    onChange={handleChange} />
                <button className='buscador-boton' type="submit"><i className='bi bi-search'></i></button>
            </div>
        </div>
    )
}

export default BarraBusqueda;
