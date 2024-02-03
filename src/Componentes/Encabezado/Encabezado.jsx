import './Encabezado.css'

function Encabezado () {

    return(
        <header className='encabezado-seccion'>
            <div className='encabezado-contenedor'>

                <div className='encabezado-principal'>
                    <div className='encabezado-prueba'>

                    </div>
                    <h1 className='encabezado-titulo'>BERCHER</h1>
                    <div className='encabezado-filtros'>
                        <i className="filtro bi bi-search"></i>
                        <div className='encabezado-compra'>
                            <h3 className='filtro encabezado-micompra'>Mi compra</h3>
                            <i className="filtro bi bi-bag"></i>
                        </div>
                        <i className="filtro bi bi-heart"></i>
                    </div>
                </div>

                <div className='encabezado-secundario'>
                    <div className='encabezado-enlaces'>
                        <a className='encabezado-enlace' href="">Inicio</a>
                        <a className='encabezado-enlace' href="">Coleccion</a>
                        <a className='encabezado-enlace' href="">Carteras</a>
                        <a className='encabezado-enlace' href="">Fiesta</a>
                        <a className='encabezado-enlace' href="">Accesorios</a>
                        <a className='encabezado-enlace' href="">Sale</a>
                        <a className='encabezado-enlace' href="">Contacto</a>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Encabezado;