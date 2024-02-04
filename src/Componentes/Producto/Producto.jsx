import React from 'react';
import { useFetch } from '../../useFetch/useFetch';
import './Producto.css';

function Producto({ itemId }) {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products/");

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: no se encontro el producto</p>;
  }

  const producto = data.find((el) => el.id === itemId);

  if (!producto) {
    throw new Error("No se encontró el producto");
  }

  return (
    <section key={producto.id} className='coleccion-carta'>
      <img className='coleccion-imagen' src={producto.image} alt={producto.title} />
      <div className='coleccion-nombreheart'>
        <h4 className='coleccion-nombre'>{producto.title}</h4>
        <i className="corazon bi bi-heart"></i>
      </div>
      <p className='coleccion-precio'>${producto.price}</p>
      <p>{producto.category}</p>
      <p>{producto.description}</p>
    </section>
  );
}

export default Producto;
