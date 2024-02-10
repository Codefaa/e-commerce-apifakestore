import './ProductoCantidad.css'

function ProductoCantidad( { handleDecrementarCantidad, handleIncrementarCantidad, cantidad } ) {

    return(
        <div className='productodetalle-seleccion-cantidad'>
            <button className='productodetalle-decrementar btn' onClick={handleDecrementarCantidad}>-</button>
            <span className='productodetalle-numero-cantidad'>{cantidad}</span>
            <button className='productodetalle-incrementar btn' onClick={handleIncrementarCantidad}>+</button>
        </div>
    )
}

export default ProductoCantidad;