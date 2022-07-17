
import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";  
import { useNavigate } from 'react-router-dom';

const Create = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkbox, setCheckbox] = useState(false)  
  

    const sendDataToApi = () => {
        axios
        .post(`https://62d25884afb0b03fc5a543b7.mockapi.io/Crud`,{
            firstName,
            lastName,
            checkbox
        }).then(()=>{
            navigate('/read');
        })
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);

    }
    return (
        <>
        <h2>CRUD Operations with React and Axios</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"   
                    onChange={(e) => setFirstName(e.target.value)} 
                    placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"   
                    onChange={(e) => setLastName(e.target.value)} 
                    placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onChange={(e) => setCheckbox(!checkbox)}
                    type="checkbox" 
                    label='I agree to the Terms and Conditions' />
                </Form.Group>

                 <Button variant="primary" onClick={sendDataToApi}>Submit</Button> 
            </Form>
        </>
    )
}
export default Create;