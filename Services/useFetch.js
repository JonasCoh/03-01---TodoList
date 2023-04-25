import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                setError(response.status)
                throw response.status;
            }).then(data => {
                setData(data);
                setLoading(false)
            })

    }, [url]);

    return [data, error, loading];

}
export default useFetch;