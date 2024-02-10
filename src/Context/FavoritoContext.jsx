import React, { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

const favoritoInicial = JSON.parse(localStorage.getItem("favoritos")) || [];

export function FavoritosProvider({ children }) {

    const [favoritos, setFavoritos] = useState(favoritoInicial);

    const agregarFavorito = (producto) => {
        setFavoritos([...favoritos, producto]);
    };

    const quitarFavorito = (productoId) => {
        setFavoritos(favoritos.filter((producto) => producto.id !== productoId));
    };

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos]);

    return (
        <FavoritosContext.Provider value={{ favoritos, agregarFavorito, quitarFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
};
