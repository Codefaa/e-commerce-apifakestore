import { Link, useLocation } from 'react-router-dom';
import './Encabezado.css';
import { useEffect, useState } from 'react';
import BarraBusqueda from '../Filtros/BarraBusqueda';
import MiCompra from '../Filtros/MiCompra';
import Favoritos from '../Filtros/Favoritos';

function Encabezado ({ onSearch, busqueda }) {
    
    const location = useLocation(); 

    const [headerColor, setHeaderColor] = useState(location.pathname === '/' ? '#FFFFFF' : '#000000');
    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!menu);
    }

    useEffect(() => {
        function cambiarColor() {
            const nuevoColorPrimario = location.pathname === '/' ? '#FFFFFF' : '#000000';
            document.documentElement.style.setProperty('--color-secundario', nuevoColorPrimario);
            setHeaderColor(nuevoColorPrimario);
        }
    
        cambiarColor();
    
        return () => {
            // Limpiar efectos si es necesario
        };
    }, [location.pathname]);

    return(
        <header className={`encabezado-seccion ${headerColor === 'blanco' ? 'fondo-blanco' : 'fondo-negro'}`}>
            <div className='encabezado-contenedor'>
                <div className='encabezado-principal'>

                    <i className="bi bi-list" onClick={toggleMenu}></i>

                    <div className={`encabezado-prueba ${ menu ? 'isActive' : ''}`}>

                        <div className='encabezado-menu'>   
                                <i class="bi bi-x-lg" onClick={toggleMenu}></i> 
                                <nav className='encabezado-menu-enlaces'>
                                    <Link onClick={toggleMenu} className='encabezado-menu-enlace' to="/">Inicio</Link>
                                    <Link onClick={toggleMenu} className='encabezado-menu-enlace' to="/productos">Coleccion</Link>
                                    <Link onClick={toggleMenu} className='encabezado-menu-enlace' to="men's clothing">Ropa de Hombre</Link>
                                    <Link onClick={toggleMenu} className='encabezado-menu-enlace' to="women's clothing">Ropa de Mujer</Link>
                                    <Link onClick={toggleMenu} className='encabezado-menu-enlace' to="jewelery">Joyería</Link>
                                    <Link onClick={toggleMenu} className='encabezado-menu-enlace' to="electronics">Electrónica</Link>
                                    <Link onClick={toggleMenu} className='encabezado-menu-enlace' to="/contacto">Contacto</Link>
                                </nav>
                        </div>
                    </div>

                    <Link className='encabezado-tituloenlace' to="/"><h1 className='encabezado-titulo'>FAKE STORE API</h1></Link>
                    
                    <div className='encabezado-filtros'>
                        {/* Pasa la función onSearch y el estado busqueda a BarraBusqueda */}
                        <BarraBusqueda onSearch={onSearch} busqueda={busqueda} />
                        <MiCompra />
                        <Favoritos />
                    </div>

                </div>

                <div className='encabezado-secundario'>
                    <nav className='encabezado-enlaces'>
                        <Link className='encabezado-enlace' to="/">Inicio</Link>
                        <Link className='encabezado-enlace' to="/productos">Coleccion</Link>
                        <Link className='encabezado-enlace' to="men's clothing">Ropa de Hombre</Link>
                        <Link className='encabezado-enlace' to="women's clothing">Ropa de Mujer</Link>
                        <Link className='encabezado-enlace' to="jewelery">Joyería</Link>
                        <Link className='encabezado-enlace' to="electronics">Electrónica</Link>
                        <Link className='encabezado-enlace' to="/contacto">Contacto</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
} 

export default Encabezado;
