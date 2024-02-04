import { useFetch } from '../../useFetch/useFetch';
import './Inicio.css';

function Inicio() {

    const { data, loading, error } = useFetch("https://fakestoreapi.com/products/category/women's clothing?limit=4");


    return(
        <main className='inicio-main'>

            <section className='inicio-arriba'>
                <img className='inicio-imagen' src="https://bercher.com.ar/assets/images/slider/pFVJud02jitu1aoeXSHqTnR5490umzOp8kb5UWiG.jpg" alt="fondo" />
                <h1 className='inicio-titulo'>Coleccion</h1>
            </section>


            <section className='inicio-abajo'>
                
                <h3 className='inicio-vertical'>Inspirate</h3>
                <h3 className='inicio-subtitulo'>Arma tu look</h3>

                <div className='inicio-look'>
                    <img className='inicio-imagen-look' src="https://bercher.com.ar/assets/images/yourlook/EGqDhPg8O0yOxOGmI7GlgbqT2HNB26cmHHkolTxi.jpg" alt="look1" />
                    <img className='inicio-imagen-look' src="https://bercher.com.ar/assets/images/yourlook/fRO0PzZg6pqwR4RYUT9dEECkS2J6kYnixLnB53Jt.jpg" alt="look2" />
                </div>

                <h3 className='inicio-subtitulo destacado'>Los destacados</h3>

                <section className="inicio-destacado">

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

                <button className='inicio-boton'>Ver mas destacados</button>

                <h3 className='inicio-subtitulo lookbook'>Lookbook</h3>
                <div className='inicio-lookbook'>
                    <img className='inicio-imagen-lookbook' src="https://bercher.com.ar/assets/images/lookbook/HIwgoFWbNcXwdNCW9VtlFcVyQgDVnryzmXztE7dA.jpg" alt="lookbook1" />
                    <img className='inicio-imagen-lookbook' src="https://bercher.com.ar/assets/images/lookbook/NUrspW7nnEqIk6cWogDJOn4L3p4764XZKphMbbOV.jpg" alt="lookbook2" />
                    <img className='inicio-imagen-lookbook' src="https://bercher.com.ar/assets/images/lookbook/rVVWi4xSDtnoIGV8OLNaZm8fFiMzBVUwEOjBnvMK.jpg" alt="lookbook3" />
                </div>
                <button className='inicio-boton'>Descubri nuevos looks</button>

            </section>

        </main>
    )
}

export default Inicio;