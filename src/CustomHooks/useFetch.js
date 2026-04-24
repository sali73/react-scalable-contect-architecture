import { useState, useEffect} from 'react'
import axios from 'axios';

export const useFetch = (url) => {
    const [usersData, setUsersData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [usersPostData, setUsersPostData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await axios.get(url)
                setUsersData(res?.data || [])
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()

    }, [url])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await axios.get(url)
                setUsersPostData(res?.data || [])
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { usersData, usersPostData, isLoading }

}