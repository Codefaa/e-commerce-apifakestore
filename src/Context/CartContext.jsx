import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export function CartProvider( {children} ) {

    const [carrito, setCarrito] = useState(carritoInicial);

    function handleAgregar(data, cantidad) {
        const productoAgregado = { ...data, cantidad };
        
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === productoAgregado.id);
    
        if(estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else{
            nuevoCarrito.push(productoAgregado);
        }
        setCarrito(nuevoCarrito);
        
    }

    function handleVaciar() {
        setCarrito([]);
    }

    function cantidadEnCarrito() {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }
  
    function precioTotal() {
      return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider value={ {carrito, setCarrito, handleAgregar, handleVaciar, cantidadEnCarrito, precioTotal} }>
            {children}
        </CartContext.Provider>
    )
}