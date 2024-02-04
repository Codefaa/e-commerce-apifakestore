import './Contacto.css';

function Contacto() {

    return(
        <section className='contacto-seccion'>
            
            <main className='contacto-contenedor'>
                
                <div className="contacto-izquierda">
                    <h2 className='contacto-titulo'>FAKE STORE API</h2>
                    <p>¿Tenes dudas? ¿Necesitas ayuda? ¡Escribinos!</p>
                    <h3 className="contacto-subtitulo">Redes sociales</h3>
                    <a className='contacto-redes' href="#">Facebook</a>
                    <a className='contacto-redes' href="#">Instagram</a>
                    <a className='contacto-redes' href="#">Pinterest</a>
                    <h3 className="contacto-subtitulo">Telefono</h3>
                    <p>11 2655 8986</p>
                    <h3 className="contacto-subtitulo">Soporte</h3>
                    <p>info@fakestoreapi.com.ar</p>
                    <p>ventas@fakestoreapi.com.ar</p>
                </div>

                <div className="contacto-derecha">
                    <h3 className='contacto-nosotros'>Ponete en contacto con nosotros</h3>
                    <p>Los campos marcados con * son obligatorios.</p>
                    <div className='contacto-inputtex'>
                        <input className='contacto-text' type="text" placeholder='Nombre *' required/>
                        <input className='contacto-text' type="text" placeholder='Email *' required/>
                    </div>
                    <textarea className='contacto-textarea' name="" id="" cols="30" rows="4" placeholder='Tu mensaje *' required></textarea>
                    <button className='contacto-boton'>Enviar mi mensaje</button>
                </div>

            </main>

        </section>
    )
}

export default Contacto;