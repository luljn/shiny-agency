import { useState, useEffect } from "react";



// To fetch the data from the API.
export function useFetch(url) {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        if(!url) return 

            async function fecthData() {

                const response = await fetch(url)
                const data = await response.json()

                setData(data)
                setLoading(false)
            }

            setLoading(true)
            fecthData()
    }, [url])

    return { isLoading, data }
}