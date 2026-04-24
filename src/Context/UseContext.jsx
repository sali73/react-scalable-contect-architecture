import { createContext, useMemo } from 'react';
import { useCustomData } from '../CustomHooks/useCustomData'
export const CreateContext = createContext()
export const ContextProvider = ({ children }) => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const { userData, isloading } = useCustomData(url)

    const value = useMemo(() => {
        return { userData, isloading }
    }, [userData, isloading])

    return (
        <CreateContext.Provider value={value}>
            {children}
        </CreateContext.Provider>
    )
}