import { useContext } from 'react';
import './Pago.css';
import { CartContext } from '../../Context/CartContext';

function Pago() {

    const { carrito, precioTotal } = useContext(CartContext);

    return(
        <form className='pago-form'>
            <section className='pago-contenedor'>
                <fieldset className='pago-formulario'>

                    <h2 className='pago-facturacion'>Informacion de facturacion</h2>

                        <label htmlFor="nombre">Nombre* <input className='pago-inputs' type="text" name='nombre' id='nombre'required/></label>
                        <label htmlFor="apellido">Apellido* <input className='pago-inputs' type="text" name='apellido' id='apellido'required/></label>
                        <label htmlFor="localidad">Localidad* <input className='pago-inputs' type="text" name='localidad' id='localidad'required/></label>
                        <label htmlFor="cuit">CUIL/CUIT* <input className='pago-inputs' type="number" name='cuit' id='cuit' placeholder='__-________-__' required/></label>
                        <label htmlFor="direccion" className='input-direccion'>Direccion* <input className='pago-inputs' type="text" name="direccion" id="direccion" placeholder='Calle y numero de domicilio' required/></label>
                        <label htmlFor="ciudad">Ciudad* <input className='pago-inputs' type="text" name='ciudad' id='ciudad'required/></label>
                        <label htmlFor="codigopostal">Codigo postal* <input className='pago-inputs' type="text" name="codigopostal" id="codigopostal" required/></label>
                        <label htmlFor="email">Email* <input className='pago-inputs' type="email" name="email" id="email" required/></label>
                        <label htmlFor="telefono">Telefono* <input className='pago-inputs' type="tel" name="telefono" id="telefono" required/></label>

                    <h2 className='pago-adicional'>Informacion adicional</h2>

                        <label htmlFor="adicional" className='textarea-nota'>Nota (opcional)<textarea className='pago-textarea' name="adicional" id="adicional" cols="30" rows="10" placeholder='Informacion adicional a tener en cuenta para el envio de su paquete.'></textarea></label>

                </fieldset>

                <fieldset className='pago-compra'>
                    
                    <h2 className='pago-tucompra'>Tu compra</h2>
                    
                        <h4 className='pago-productos'>Productos</h4>

                        {carrito && 
                        carrito.map((prod) => (
                            <>
                                <p className='pago-prodtitle'>{prod.title}: <strong>{prod.cantidad} u</strong></p>
                                <span className='pago-prodprice'>${prod.price}</span>
                            </>
                        ))}

                        <h4>Subtotal</h4>
                        <strong>${precioTotal()}</strong>
                        <h4>Envio</h4>
                        <strong>$0,00</strong>
                        <h4>Total</h4>
                        <strong>${precioTotal()}</strong>
                        
                        <p className='pago-terminoscondiciones'>Tu información personal será utilizada para procesar tu compra, realizar el despacho de tu paquete y otros propósitos descritos en nuestra sección de <a href="#" rel="noreferrer">terminos y condiciones.</a></p>

                        <label htmlFor="medio-pago" className='label-mediopago'> Seleccione un medio de pago
                            <select name="medio-pago" id="medio-pago"> 
                                <option value="">Mercado pago</option>
                                <option value="">Transferencia bancaria</option>
                            </select>
                        </label>

                        <button className='boton-pagar'>Pagar</button>

                </fieldset>
            </section>
        </form>
    )
}

export default Pago;