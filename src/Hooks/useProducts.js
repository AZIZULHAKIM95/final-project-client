import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setproducts] = useState([])
    const url= "http://192.168.0.103"
    useEffect(() => {
        fetch(url+"/products")
            .then(res => res.json())
            .then(data => setproducts(data.data))
    }, [])
    return [products, setproducts]
}

export default useProducts