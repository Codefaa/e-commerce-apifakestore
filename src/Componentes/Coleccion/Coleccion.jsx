import { useFetch } from '../../useFetch/useFetch'
import './Coleccion.css'

function Coleccion() {

    const { data, loading, error } = useFetch("https://fakestoreapi.com/products/");

    return(
        <section className='coleccion-seccion'>

            <div className='coleccion-contenedor'>
                <h4 className='coleccion-titulo'>Coleccion</h4>

                <section className="coleccion-cartas">
                {error && <h2>Error: {error}</h2>}
                {loading && <h2>Loading...</h2>}
                {data && 

                data.map((ropa) => {

                        return (
                                <section key={ropa.id} className='coleccion-carta'>
                                    <a href="#">
                                    <div className="carta">
                                        <img className='coleccion-imagen' src={ropa.image} alt={ropa.title} />
                                        <div className="coleccion-fondonegro"></div>
                                    </div>
                                    </a>
                                    
                                    <div className='coleccion-nombreheart'>
                                        <a className='coleccion-enlacenombre' href="#"><h4 className='coleccion-nombre'>{ropa.title}</h4></a>
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

export default Coleccion;