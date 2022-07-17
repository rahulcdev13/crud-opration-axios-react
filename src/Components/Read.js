
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
    console.log(readData);

    const setUpdateId = (id, firstName, lastName,checkbox) => {
        localStorage.setItem('ID', id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
        console.log({ id, firstName, lastName });
    }

    const getData = () => {
        axios
            .get(`https://62d25884afb0b03fc5a543b7.mockapi.io/Crud`)
            .then((getdata) => {
                setReadData(getdata.data);
            })
    }

    const setDeleteId = (id) => {
        axios.delete(`https://62d25884afb0b03fc5a543b7.mockapi.io/Crud/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <>
        <h2>CRUD Operations with React and Axios</h2>                        
        <Link to='/'><button className="btn btn-success me-4">Create New User</button></Link>
            <Table className="table" striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Status</th>
                        <th className="operations">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {readData.map((showData, i) => {
                        return (
                            <>
                                <tr key={i}>
                                    <td>{showData.id}</td>
                                    <td>{showData.firstName}</td>
                                    <td>{showData.lastName}</td>
                                    <td>{showData.checkbox ? 'Active' : 'In-Active'}</td>
                                    <td className="operations">
                                        <Link to='/update'><button onClick={() => setUpdateId(showData.id, showData.firstName, showData.lastName)} className="btn btn-warning me-4">Update</button></Link>
                                        <Link to='/read'><button onClick={() => setDeleteId(showData.id)} className="btn btn-danger">Delete</button></Link>
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