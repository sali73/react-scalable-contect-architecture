import { UserContext } from '../Context/UserContext.jsx';
import { useState, useEffect, useContext } from 'react'

export const Home = () => {
    // Pull exactly what you need from Context
    const { usersData, usersPostData, isLoading } = useContext(UserContext);

    return (
        <>
            <br />
            <h2>Welcome!</h2>
            <br />

            {isLoading ? <h3>Loading...</h3> :
                <div>
                    <h2>List of users</h2>

                    {usersData && usersData.map((user, i) => {
                        return (
                            <>
                                <ul>
                                    <li style={{ listStyle: 'none' }} key={i}><b> user name: </b>{user.name}</li>
                                </ul>

                            </>
                        )
                    })}
                    <div>
                        <h2>Post of users</h2>

                        {usersPostData && usersPostData.map((post, i) => {
                            return (
                                <>
                                    <ul>
                                        <li style={{ listStyle: 'none' }} key={`index-${i}`}> <b>Post Title:</b> {post.title}</li>
                                    </ul>

                                </>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}