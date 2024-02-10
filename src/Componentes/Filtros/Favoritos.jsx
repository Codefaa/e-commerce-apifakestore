import './Filtros.css';
import { FavoritosContext } from '../../Context/FavoritoContext';
import { useContext } from 'react';

function Favoritos() {

    const { favoritos } = useContext(FavoritosContext);

    return (
        <div className='encabezado-favoritos'>
            <i className="filtro bi bi-heart"></i>
            <div className='productos-favoritos'>
                <h4 className='favorito-titulo'>Favoritos</h4>

                {favoritos.length > 0 ? (
                    favoritos.map((producto) => (
                        <div key={producto.id} className="nombre-precio-imagen">
                            <div className="nombre-precio">
                                <h4 className='favorito-nombre'>{producto.title}</h4>
                                <h4 className='favorito-precio'>${producto.price}</h4>
                            </div>
                            <img className='favorito-imagen' src={producto.image} alt={producto.title} />
                        </div>
                    ))
                ) : (
                    <div>
                        <p>No hay productos en tu lista de favoritos</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Favoritos;
