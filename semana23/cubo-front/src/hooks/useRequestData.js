import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (initialState, url, config = {}) => {
    const [data, setData] = useState(initialState)
    const request = () => {
        axios.get(url, config)
            .then((res) => {
                setData(res.data)
            })
            .catch(err => {
                alert("Deu ruim")
            })
    }

    useEffect(() => {
        request()
    }, [])

    return [data, request]
}