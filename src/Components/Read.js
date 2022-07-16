
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from "react-router-dom";

const Read = () => {
    const [readData, setReadData] = useState([])
    
    useEffect(() => {
        axios
            .get(`https://62d25884afb0b03fc5a543b7.mockapi.io/Crud`)
            .then((getdata) => {
                setReadData(getdata.data);
            })
    }, []);

    const updateData = (id) => {
        console.log(id);
        localStorage.setItem("ID",id);

    }
    const deleteData = (id) => {
        console.log(id);
    }

    // console.log(readData);
    return (
        <>
            <Table className="table" striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th className="operations">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {readData.map((showData, i) => {
                        return (
                            <>
                                <tr>
                                    <td key={i}>{i + 1}</td>
                                    <td>{showData.firstName}</td>
                                    <td>{showData.lastName}</td>
                                    <td className="operations">
                                        <Link to='/update'>
                                            <button onClick={() => updateData(showData.id)} className="btn btn-warning me-4">Update</button>
                                        </Link>
                                        <Link to='/update'>
                                            <button onClick={() => deleteData(showData.id)} className="btn btn-danger">Delete</button>
                                        </Link>
                                    </td>
                                </tr>
                            </>
                        )
                    })}


                </tbody>
            </Table>
        </>
    )
}
export default Read;