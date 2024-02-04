import { useFetch } from '../../useFetch/useFetch';
import './RopaMujer.css';

function RopaMujer() {

    const { data, loading, error } = useFetch("https://fakestoreapi.com/products/category/women's clothing");

    return(
        <section className='coleccion-seccion'>

            <div className='coleccion-contenedor'>
                <h4 className='coleccion-titulo'>Ropa de mujer</h4>

                <section className="coleccion-cartas">
                {error && <h2>Error: {error}</h2>}
                {loading && <h2>Loading...</h2>}
                {data && 

                data.map((ropa) => {

                        return (
                                <section key={ropa.id} className='coleccion-carta'>
                                    <img className='coleccion-imagen' src={ropa.image} alt={ropa.title} />
                                    <div className='coleccion-nombreheart'>
                                        <h4 className='coleccion-nombre'>{ropa.title}</h4>
                                        <i className="corazon bi bi-heart"></i>
                                    </div>
                                    <p className='coleccion-precio'>${ropa.price}</p>
                                </section>
                                )
                    })
                }

                </section>

            </div>

        </section>
    )
}

export default RopaMujer;