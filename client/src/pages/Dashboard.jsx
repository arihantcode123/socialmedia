import React, { useEffect, useState } from 'react'
import './table.css'


export default function Dashboard() {
    const [userData,setuserData]=useState([])
    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/dashboard`, {
                method: "GET",
            })
            // console.log(response);
            const responseData = await response.json();
            setuserData(responseData)
            // console.log(responseData);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchUserData();
    }, [])
    return (
        <>
            <div>
                <table border="4">
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Social Handle</th>
                            <th>Image Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((row, index) => {
                            return(<tr key={index}>
                                <td>
                                    {row.picture ? (
                                        <img
                                            src={`http://localhost:5000/images/${row.picture}`}
                                            height="100px"
                                            widht="100px"
                                            alt="Not Available"
                                        />
                                    ) : (
                                        <img src={"https://picsum.photos/200/300"} alt="Service" width="50" />
                                    )}
                                </td>
                                <td>{row.name}</td>
                                <td>{row.socialmedia}</td>
                                <td>{row.picture}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
