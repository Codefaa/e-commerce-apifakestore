import { useForm } from 'react-hook-form';
import './Contacto.css';

function Contacto() {

    const { register, handleSubmit } = useForm();

    function enviar(data) {
        console.log(data);
    }

    return(
        <section className='contacto-seccion'>
            
            <div className='contacto-contenedor'>
                
                <div className="contacto-izquierda">
                    <h2 className='contacto-titulo'>FAKE STORE API</h2>
                    <p>¿Tenes dudas? ¿Necesitas ayuda? ¡Escribinos!</p>
                    <h3 className="contacto-subtitulo">Redes sociales</h3>
                    <a className='contacto-redes' href="https://www.facebook.com" target='_blank' rel="noreferrer">Facebook</a>
                    <a className='contacto-redes' href="https://www.instagram.com" target='_blank' rel="noreferrer">Instagram</a>
                    <a className='contacto-redes' href="https://ar.pinterest.com" target='_blank' rel="noreferrer">Pinterest</a>
                    <h3 className="contacto-subtitulo">Telefono</h3>
                    <p>11 2655 8986</p>
                    <h3 className="contacto-subtitulo">Soporte</h3>
                    <p>info@fakestoreapi.com.ar</p>
                    <p>ventas@fakestoreapi.com.ar</p>
                </div>

                <form className="contacto-derecha" onSubmit={handleSubmit(enviar)}>
                    <h3 className='contacto-nosotros'>Ponete en contacto con nosotros</h3>
                    <p>Los campos marcados con * son obligatorios.</p>
                    <div className='contacto-inputtex'>
                        <input className='contacto-text' type="text" placeholder='Nombre *' required {...register("nombre")} />
                        <input className='contacto-text' type="email" placeholder='Email *' required {...register("email")} />
                    </div>
                    <textarea className='contacto-textarea' cols="30" rows="4" placeholder='Tu mensaje *' required {...register("mensaje")} ></textarea>
                    <button type='submit' className='contacto-boton'>Enviar mi mensaje</button>
                </form>

            </div>

        </section>
    )
}

export default Contacto;