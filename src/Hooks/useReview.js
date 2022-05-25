import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = process.env.REACT_APP_API_URL;
        fetch(url+'/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.data))
    }, [])
    return [reviews, setReviews]
}

export default useReview