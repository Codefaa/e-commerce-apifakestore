import './ProductoLista.css';
import { useFetch } from '../../useFetch/useFetch';
import Producto from '../Producto/Producto';
import { useParams } from 'react-router-dom';

function ProductoLista({ busqueda }) {
    const { categoria } = useParams();
    const { data: allProducts, loading, error } = useFetch(categoria ? `https://fakestoreapi.com/products/category/${categoria}` : 'https://fakestoreapi.com/products');
    
    // Filtrar todos los productos en función de los términos de búsqueda si hay una búsqueda, de lo contrario, muestra todos los productos de la categoría actual
    let filteredProducts;
    if (busqueda) {
        filteredProducts = allProducts.filter((producto) => 
            producto.title.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
            producto.category.toString().toLowerCase().includes(busqueda.toLowerCase())
        );
    } else {
        filteredProducts = allProducts;
    }

    return(
        <section className="producto-seccion">
            <div className="producto-contenedor">
                <h4 className="producto-titulo">{categoria ? categoria : 'Coleccion'}</h4>
                <section className="producto-cartas">
                    <Producto data={filteredProducts} loading={loading} error={error}/>
                </section>
            </div>
        </section>
    )
}

export default ProductoLista;