import { useState, useEffect } from "react";

export function useFetch(url) {

    const [data, setListaProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setListaProducto(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}
