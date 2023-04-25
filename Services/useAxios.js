import { useEffect, useState } from "react";
import axios from 'axios';

function useAxios(url) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get(url)
            .then(response => {
                setData(response.data)
                setLoading(false)
            }).catch(err => setError(err.message))

    }, [url]);

    return [data, error, loading, setData];

}
export default useAxios;