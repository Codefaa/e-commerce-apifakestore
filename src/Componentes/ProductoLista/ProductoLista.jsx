import './ProductoLista.css';
import { useFetch } from '../../useFetch/useFetch';
import Producto from '../Producto/Producto';
import { useParams } from 'react-router-dom';

function ProductoLista() {
    const { categoria } = useParams();
    const { data, loading, error } = useFetch(categoria ? `https://fakestoreapi.com/products/category/${categoria}` : 'https://fakestoreapi.com/products');
    

    return(
        <section className="producto-seccion">
            <div className="producto-contenedor">
                <h4 className="producto-titulo">{categoria ? categoria : 'Coleccion'}</h4>
                <section className="producto-cartas">
                    <Producto data={data} loading={loading} error={error}/>
                </section>
            </div>
        </section>
    )
}

export default ProductoLista;