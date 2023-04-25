import { useState } from "react";
import axios from 'axios';

function useAxiosForm(params) {

    const [data, setData] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const send = e => {

        e.preventDefault();
        setLoading(true)

        axios.request(params)
            .then(response => setData(response.data))
            .catch(err => setError(err.message))
            .finally(setLoading(false))
    }

    return [send, data, error, loading];

}
export default useAxiosForm;