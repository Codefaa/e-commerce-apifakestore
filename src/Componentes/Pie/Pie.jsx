import './Pie.css'

function Pie() {

    return(
        <footer className='pie-seccion'>

            <div className='pie-contenedor'>
                
                <div className='pie-arriba'>
                    <h4 className='pie-titulo'>Suscribite al newsletter</h4>
                    <div className='pie-email'>
                        <input className='pie-input' type="text" placeholder='Ingresa tu email'/>
                        <button className='pie-boton'>OK</button>
                    </div>
                    <h4 className='pie-subtitulo'>Seguinos en nuestras redes sociales</h4>
                    <div className='pie-redes'>
                        <i class="redes bi bi-facebook"></i>
                        <i class="redes bi bi-instagram"></i>
                        <i class="redes bi bi-pinterest"></i>
                    </div>
                </div>

                <div className='pie-abajo'>
                    <div className="pie-enlaces">
                        <a className='pie-enlace' href="">Quienes somos</a>
                        <a className='pie-enlace' href="">Preguntas frecuentes</a>
                        <a className='pie-enlace' href="">Tabla de talles</a>
                        <a className='pie-enlace' href="">Terminos y condiciones</a>
                        <a className='pie-enlace' href="">Contacto</a>
                    </div>
                    <p className='pie-copyright'>© FAKE STORE API 2024. Todos los derechos reservados</p>
                </div>
                
            </div>
            
        </footer>
    )
}

export default Pie;