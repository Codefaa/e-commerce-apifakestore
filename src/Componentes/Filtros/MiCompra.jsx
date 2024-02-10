import { Link } from 'react-router-dom';
import './Filtros.css'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function MiCompra() {
 
    const { carrito, cantidadEnCarrito, precioTotal } = useContext(CartContext)

    return(
        <div className="encabezado-carrito-compra">

            <Link className='encabezado-carritoenlace' to="/carrito" >
            <div className='encabezado-compra'>
                <h3 className='filtro encabezado-micompra'>Mi compra</h3>
                <i className="filtro bi bi-bag"><span className='numero-compra'>{cantidadEnCarrito()}</span></i>
            </div>
            </Link>

            <div className="carrito-compra">
                <div className='productos-vercarrito'>
                    <h4 className='productos-cantidad'>{cantidadEnCarrito()} Producto/s</h4>
                    <Link className='vercarrito-titulo' to="/carrito">Ver carrito</Link>
                </div>
                {cantidadEnCarrito() > 0 ?
                 carrito.map((prod) => (
                   <div key={prod.id} className='nombre-cantidad-imagen'>
                       <div className='nombre-cantidad'>
                           <h4 className='compra-nombre'>{prod.title}</h4>
                           <h4 className='compra-unidades'>{prod.cantidad} unidades X</h4>
                       </div>
                       <img className='imagen-compra' src={prod.image} alt={prod.tile} />
                   </div>
                )) :
                    <div className='carrito-vacio'>
                        <p className='carrito-vacio-parrafo'>No hay productos en tu carrito de compras.</p>     
                    </div>
                }
                {cantidadEnCarrito() > 0 ? <h4 className='compra-subtotal'>Subtotal: ${precioTotal()}</h4> : ""}
            </div>
        </div>
    )
}

export default MiCompra;