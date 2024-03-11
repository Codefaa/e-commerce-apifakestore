import './Carrito.css'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

function Carrito() {
 
    const { carrito, precioTotal, cantidadEnCarrito, handleVaciar } = useContext(CartContext);
 
    return(
        
        <section className='carrito-seccion'>
            { cantidadEnCarrito() > 0 ?
            <div className='carrito-contenedor'>
                <div className='carrito-pasos'>
                    <h2 className="carrito-titulo-pasos">1.Carrito <span className='paso-siguiente'>{'>'}</span></h2>
                    <h2 className="carrito-titulo-pasos">2.Pago<span className='paso-siguiente'>{'>'}</span></h2>
                    <h2 className="carrito-titulo-pasos">3.Orden terminada</h2>
                </div>

                <aside className='carrito-izquierda'>

                    <table className='carrito-tabla'>
                        <thead className='tabla-thead'>
                            <tr className='thead-tr'>
                                <th className='tr-th producto'>Producto</th>
                                <th className='tr-th nombre'>Nombre</th>
                                <th className='tr-th precio'>Precio</th>
                                <th className='tr-th cantidad'>Cantidad</th>
                                <th className='tr-th subtotal'>Subtotal</th>
                            </tr>
                        </thead>
                            
                        <tbody className='tabla-tbody'>
                        {carrito.map((prod) => (
                            <tr key={prod.id} className='tbody-tr'>
                                <td className='tr-td imagen'><Link to={`/productos/${prod.id}`}><img className='tabla-imagen' src={prod.image} alt={prod.title} /></Link></td>
                                <td className='tr-td nombre'><Link className='tabla-nombre-enlace' to={`/productos/${prod.id}`}>{prod.title}</Link></td>
                                <td className='tr-td precio'><span>${prod.price}</span></td>
                                <td className='tr-td cantidad'><span>{prod.cantidad}</span></td>
                                <td className='tr-td subtotal'><span>${prod.price * prod.cantidad}</span></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div className="carrito-vaciar">
                        <button className='carrito-vaciar-boton' type="submit" onClick={handleVaciar}>Vaciar carrito</button>
                    </div>

                </aside>

                <aside className='carrito-derecha'>
                    <h3 className='derecha-titulo'>Resumen de compra</h3>
                    <div className="carrito-subtotal">
                        <h4>Subtotal</h4>
                        <span>${precioTotal()}</span>
                    </div>
                    <div className="carrito-envio">
                        <h4>Envio</h4>
                        <p><span className='derecha-distancia'>(0, 10Kg) </span> $0,00</p>
                    </div>
                    <div className="carrito-opciones-envio">
                        <h4>Opciones de envio</h4>
                        <label htmlFor="retirolocal">
                            <input type="radio" name="retiro" id="retirolocal" checked /> Retiro en local
                        </label>
                        <label htmlFor="retirocorreo">
                            <input type="radio" name="retiro" id="retirocorreo" /> Correo Argentino
                        </label>
                    </div>
                    <div className="carrito-total">
                        <div className='carrito-totalprecio'>
                            <h4>Total</h4>
                            <span className='total-spanprecio'>${precioTotal()}</span>
                        </div>
                        <Link className='carrito-botoncontinuar' to="/pago">Continuar</Link>
                    </div>
                </aside>
            </div>
        :
        <div className='compra-carrito-vacio'>
            <h1 className='compra-carrito-vacio-titulo'>CARRITO VACIO</h1>
            <p className='compra-carrito-vacio-parrafo'>No hay productos en tu carrito de compras.</p> 
        </div>
        }
        </section> 
    )
}

export default Carrito;