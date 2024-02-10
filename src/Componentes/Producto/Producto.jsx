import { Link } from 'react-router-dom';
import './Producto.css';
import { FavoritosContext } from '../../Context/FavoritoContext';
import { useContext } from 'react';

function Producto( {data, loading, error } ) {

    const { agregarFavorito, quitarFavorito, favoritos } = useContext(FavoritosContext); // Obtener el contexto de favoritos

    function handleFavorito(id) {
        if (favoritos.some((producto) => producto.id === id)) {
            quitarFavorito(id);
        } else {
            agregarFavorito(data.find((producto) => producto.id === id));
        }
    }

    return(
        <>
        {error && <h2>Error: {error}</h2>}
        {loading && <h2>Loading...</h2>}
        {!loading && data && 
        data.map((ropa) => {
 
                return (
                        <section key={ropa.id} className='producto-carta'>
                            <Link to={`/productos/${ropa.id}`} >
                            <div className="carta">
                                <img className='producto-imagen' src={ropa.image} alt={ropa.title} />
                                <div className="producto-fondonegro"></div>
                            </div>
                            </Link>
                            
                            <div className='producto-nombreheart'>
                                <Link className='producto-enlacenombre' to={`/productos/${ropa.id}`}><h4 className='producto-nombre'>{ropa.title}</h4></Link>
                                <i className={favoritos.some((producto) => producto.id === ropa.id) ? 'bi bi-heart-fill' : 'bi bi-heart'} onClick={() => handleFavorito(ropa.id)}></i>
                            </div>
                            <p className='producto-precio'>${ropa.price}</p>
                        </section>
                        )
            })}
        </>    
    )
}

export default Producto;