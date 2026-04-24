import { CreateContext } from '../Context/UseContext'
import { useState, useEffect, useContext } from 'react'

export const Home = () => {
    const { userData, isloading } = useContext(CreateContext)

    return (
        <>
            <br />
            <h2>React Scalable Contect Architecture</h2>
            <br />
            <div>
                {isloading ? <h3>Loading.....</h3> :
                    <>
                        {userData && userData.map((user, index) => {
                            return (
                                <ul>
                                    <li style={{listStyle:'none'}} key={`index-${index}`} > {user?.name} </li>
                                </ul>
                            )

                        })}
                    </>
                }
            </div>

        </>
    )
}