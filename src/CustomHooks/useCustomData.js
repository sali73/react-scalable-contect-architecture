import { useState, useEffect } from 'react'
import axios from 'axios';

export const useCustomData = (url) => {
    const [userData, setUserData] = useState([])
    const [isloading, setIsloading] = useState(false)

    useEffect(() => {
        const fetchUserData = async () => {
            setIsloading(true)
            try {
                const res = await axios.get(url)
                setUserData(res?.data || [])
            } catch (err) {
                console.log(err)
            } finally {
                setIsloading(false)
            }
        }
        fetchUserData()
    }, [url])

    return {userData, isloading}

}