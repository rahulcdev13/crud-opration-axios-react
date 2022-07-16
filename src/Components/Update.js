
import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from "axios"; 

const Update = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('') ;
    const [dataId,setDataId]=useState(null) 
 
    const sendDataToApi = () => {
        axios.put(`https://62d25884afb0b03fc5a543b7.mockapi.io/Crud/${dataId}`,{
            firstName,
            lastName
        })
        alert("Data Updated Successfully...!")
    }
    useEffect(()=>{
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setDataId(localStorage.getItem('dataId'));

    },[])
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="fName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label='I agree to the Terms and Conditions' />
                </Form.Group>

                 <Button variant="primary" onClick={sendDataToApi}>Update</Button> 
            </Form>
        </>
    )
}
export default Update;