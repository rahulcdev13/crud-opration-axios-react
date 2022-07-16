
import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from "axios"; 

const Create = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')  
 
    const sendDataToApi = () => {
        axios.post(`https://62d25884afb0b03fc5a543b7.mockapi.io/Crud`,{
            firstName,
            lastName
        })
        alert("Data Created Successfully...!")
    }
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="fName" onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lName" onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label='I agree to the Terms and Conditions' />
                </Form.Group>

                 <Button variant="primary" onClick={sendDataToApi}>Submit</Button> 
            </Form>
        </>
    )
}
export default Create;