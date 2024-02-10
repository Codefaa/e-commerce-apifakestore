import { Link, useLocation } from 'react-router-dom';
import './Pie.css'

function Pie() {
 
    const location = useLocation();

    return(
        <footer className='pie-seccion'>

            <div className='pie-contenedor'>
            {location.pathname === '/carrito' || location.pathname === '/pago' ? <div></div> :  
                <div className='pie-arriba'>
                    <h4 className='pie-titulo'>Suscribite al newsletter</h4>
                    <div className='pie-email'>
                        <input className='pie-input' type="text" placeholder='Ingresa tu email'/>
                        <button className='pie-boton'>OK</button>
                    </div>
                    <h4 className='pie-subtitulo'>Seguinos en nuestras redes sociales</h4>
                    <div className='pie-redes'>
                        <a className='pie-red' href="https://www.facebook.com" target='_blank' rel="noreferrer"><i class="redes bi bi-facebook"></i></a>
                        <a className='pie-red' href="https://www.instagram.com" target='_blank' rel="noreferrer"><i class="redes bi bi-instagram"></i></a>
                        <a className='pie-red'href="https://ar.pinterest.com" target='_blank' rel="noreferrer"><i class="redes bi bi-pinterest"></i></a>
                    </div>
                </div>
            }
                <div className='pie-abajo'>
                    <div className="pie-enlaces">
                        <a className='pie-enlace' href="https://www.linkedin.com/in/facundo-garcia-312b73297/" target='_blank' rel="noreferrer">Quienes somos</a>
                        <a className='pie-enlace' href="https://www.linkedin.com/in/facundo-garcia-312b73297/" target='_blank' rel="noreferrer">Preguntas frecuentes</a>
                        <a className='pie-enlace' href="https://www.linkedin.com/in/facundo-garcia-312b73297/" target='_blank' rel="noreferrer">Tabla de talles</a>
                        <a className='pie-enlace' href="https://www.linkedin.com/in/facundo-garcia-312b73297/" target='_blank' rel="noreferrer">Terminos y condiciones</a>
                        <Link className='pie-enlace' to="/contacto">Contacto</Link>
                    </div>
                    <p className='pie-copyright'>© FAKE STORE API 2024. Todos los derechos reservados</p>
                </div>
                
            </div>
            
        </footer>
    )
}

export default Pie;