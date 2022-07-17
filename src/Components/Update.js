
import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from "axios"; 
import {useNavigate} from 'react-router'

const Update = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('') ; 
    const [checkbox, setCheckbox] = useState(false)  
    const [ID,setId]=useState(null);

 
    const updateDataToApi = () => {
        axios.put(`https://62d25884afb0b03fc5a543b7.mockapi.io/Crud/${ID}`,{
            firstName,
            lastName,
            checkbox
        }).then(()=>{
            navigate('/read')
        }) 
    }

    useEffect(()=>{   
         setFirstName(localStorage.getItem('firstName')); 
         setLastName(localStorage.getItem('lastName')); 
         setCheckbox(localStorage.getItem('checkbox')); 
         setId(localStorage.getItem('ID'));
    }, [])
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"  
                    name="fname"
                    value={firstName || ''}
                    onChange={(e) => setFirstName(e.target.value)} 
                    placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" 
                     name="lname"
                     value={lastName || ''} 
                    onChange={(e) => setLastName(e.target.value)} 
                    placeholder="Enter Last Name" />
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                     name="checkbox"
                     value={checkbox || ''} 
                     onChange={(e) => setCheckbox(!checkbox)}
                    type="checkbox" 
                    label='I agree to the Terms and Conditions' />
                </Form.Group> 

                 <Button variant="primary" onClick={updateDataToApi}>Update</Button> 
            </Form>
        </>
    )
}
export default Update;