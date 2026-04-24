import { createContext, useMemo } from 'react';
import { useFetch } from '../CustomHooks/useFetch'; // Use your simplified hook here

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    //react custom hooks
    const { usersData, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users');
    const { usersPostData } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const value = useMemo (()=>{
        return {usersData, usersPostData, isLoading }
    }, [usersData, usersPostData, isLoading ])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}