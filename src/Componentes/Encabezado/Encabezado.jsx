import { Link, useLocation } from 'react-router-dom';
import './Encabezado.css'
import { useEffect, useState } from 'react';

function Encabezado () {

    const location = useLocation();

    // Establecer un estado para el color del encabezado
    const [headerColor, setHeaderColor] = useState(location.pathname === '/' ? '#FFFFFF' : '#000000');

    // Función para cambiar el color del encabezado cuando cambia la ruta
    function cambiarColor() {
        const nuevoColorPrimario = location.pathname === '/' ? '#FFFFFF' : '#000000';
        document.documentElement.style.setProperty('--color-secundario', nuevoColorPrimario);
        setHeaderColor(nuevoColorPrimario);
    }

    // Suscribirse a cambios de ubicación para actualizar el color del encabezado
    useEffect(() => {
        cambiarColor();
    }, [location.pathname]);

    return(
        <header className={`encabezado-seccion ${headerColor === 'blanco' ? 'fondo-blanco' : 'fondo-negro'}`}>
            <div className='encabezado-contenedor'>

                <div className='encabezado-principal'>
                    <div className='encabezado-prueba'>

                    </div>
                    <Link className='encabezado-tituloenlace' to="/"><h1 className='encabezado-titulo'>FAKE STORE API</h1></Link>
                    <div className='encabezado-filtros'>
                        <i className="filtro bi bi-search"></i>
                        <div className='encabezado-compra'>
                            <h3 className='filtro encabezado-micompra'>Mi compra</h3>
                            <i className="filtro bi bi-bag"></i>
                        </div>
                        <i className="filtro bi bi-heart"></i>
                    </div>
                </div>

                <div className='encabezado-secundario'>
                    <nav className='encabezado-enlaces'>
                        <Link className='encabezado-enlace' to="/">Inicio</Link>
                        <Link className='encabezado-enlace' to="/coleccion">Coleccion</Link>
                        <Link className='encabezado-enlace' to="/ropahombre">Ropa de Hombre</Link>
                        <Link className='encabezado-enlace' to="/ropamujer">Ropa de Mujer</Link>
                        <Link className='encabezado-enlace' to="/joyeria">Joyería</Link>
                        <Link className='encabezado-enlace' to="/electronica">Electrónica</Link>
                        <Link className='encabezado-enlace' to="/contacto">Contacto</Link>
                    </nav>
                </div>

            </div>
        </header>
    )
}

export default Encabezado;