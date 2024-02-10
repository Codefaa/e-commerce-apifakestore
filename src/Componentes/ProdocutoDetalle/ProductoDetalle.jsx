import { useParams } from 'react-router-dom';
import { useFetch } from '../../useFetch/useFetch';
import './ProductoDetalle.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import ProductoCantidad from '../ProductoCantidad/ProductoCantidad';
import { FavoritosContext } from '../../Context/FavoritoContext';

function ProductoDetalle() { 
 
  const { handleAgregar } = useContext(CartContext);
  const { agregarFavorito, quitarFavorito, favoritos } = useContext(FavoritosContext);

  const [cantidad, setCantidad] = useState(1);

  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  function handleDecrementarCantidad() {
    cantidad > 1 && setCantidad(cantidad - 1);
  }

  function handleIncrementarCantidad() {
    cantidad < data.rating.count && setCantidad(cantidad + 1);
  }

  function handleFavorito(id) {
    if (favoritos.some((producto) => producto.id === id)) {
        quitarFavorito(id);
    } else {
        agregarFavorito(data);
    }
}

  return(
    <section className="productodetalle-detalles">
    {error && <h2>Error: {error}</h2>}
    {loading && <h2>Loading...</h2>}
    {data &&
            <section key={data.id} className='productodetalle-contenedor'>

                <div className="productodetalle-contenedor-imagen">
                    <img className='productodetalle-imagen' src={data.image} alt={data.title} />
                </div>

                <div className='productodetalle-datos'>
                    <h2 className='productodetalle-titulo'>{data.title}</h2>
                    <p className='productodetalle-codigo-marca'>Codigo: #{data.id} <span className="marca">Marca: FAKE STORE API</span></p> 
                    <strong className='productodetalle-precio'>${data.price}</strong>
                    <p className='productodetalle-descripcion'><span className='span-descripcion'>Descripcion: </span>{data.description}</p>

                    {(data.category === "men's clothing" || data.category === "women's clothing") && (

                    <div className='productodetalle-contenedor-talle'>
                        <p className='productodetalle-talle'>Talle:</p>
                        <select name="select" id="productodetalle-select">
                            <option value="elija una opcion">Elija una opcion</option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                        </select>
                    </div>

                    ) }

                    <div className='productodetalle-contenedor-cantidad'>
                        <p className='productodetalle-cantidad'>Qty:</p>
                        <ProductoCantidad handleDecrementarCantidad={handleDecrementarCantidad} handleIncrementarCantidad={handleIncrementarCantidad} cantidad={cantidad} />
                        <button className='productodetalle-añadir' onClick={() => handleAgregar(data, cantidad)}>Añadir al carrito</button>
                    </div>
                    <div className='productodetalle-contenedor-redes'>
                        <i className="productodetalle-redes bi bi-facebook"></i>
                        <i className="productodetalle-redes bi bi-twitter-x"></i>
                        <button className='productodetalle-boton-favorito' onClick={() => handleFavorito(data.id)}>
                        <i className={favoritos.some((producto) => producto.id === data.id) ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
                        {favoritos.some((producto) => producto.id === data.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                        </button>
                    </div>
                </div>
                
            </section>
    }
    </section>
    )
}

export default ProductoDetalle;
