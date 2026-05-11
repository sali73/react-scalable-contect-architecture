import { useCallback, useContext } from 'react'; // متنسيش الـ useContext
import { CreateContext } from '../Context/UseContext';
import UserItem from '../User/UserItem.jsx';

export const Home = () => {
    const { userData, isloading } = useContext(CreateContext);

    const handleUserClick = useCallback((id) => {
        console.log("User ID clicked: ", id); 
    }, []); 

    if (isloading) return <h3>Loading.....</h3>;

    return (
        <div>
            <br />
            <h2>React Scalable Context Architecture</h2>
            <br />
            <ul>
                {userData && userData.map((user) => (
                    <UserItem 
                        name={user?.name} 
                        id={user.id} 
                        onClick={handleUserClick} 
                    />
                ))}
            </ul>
        </div>
    );
};
