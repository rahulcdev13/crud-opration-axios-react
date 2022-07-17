
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from "react-router-dom";

const Read = () => {
    const [readData, setReadData] = useState([])

    // Fetch data and dis[lay in Table Form from API using axios. 
    useEffect(() => {
        axios
            .get(`https://62d25884afb0b03fc5a543b7.mockapi.io/Crud`)
            .then((getdata) => {
                setReadData(getdata.data);
            })
    }, []);
    console.log(readData);
    // ================================================================================

    // Onbutton get all data and setItem using localStorage for updatation 
    const setUpdateId = (id, firstName, lastName, checkbox) => {
        localStorage.setItem('ID', id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
        console.log({ id, firstName, lastName });
    }
    // ================================================================================

    // First Get data for Delete oprations
    const getAllData = () => {
        axios
            .get(`https://62d25884afb0b03fc5a543b7.mockapi.io/Crud`)
            .then((getdata) => {
                setReadData(getdata.data);
            })
    }

    // onClick Delete oprations 
    const setDeleteId = (id) => {
        axios.delete(`https://62d25884afb0b03fc5a543b7.mockapi.io/Crud/${id}`)
            .then(() => {
                getAllData();
            })
    }
    // ================================================================================

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