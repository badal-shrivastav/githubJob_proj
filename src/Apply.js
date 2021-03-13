import React from 'react'
import {Form,Button} from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const applied = ()=>{
    
}

function Apply() {
    return (
   <>
   <Form onSubmit={(e)=>{e.preventDefault();toast.success('Applied Successfull');}}>
            <Form.Group controlId="formBasic">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" required/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Skills</Form.Label>
                <Form.Control type="text" placeholder="Skills" required/>
            </Form.Group>


            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Upload Resume" required/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <ToastContainer />
            
</Form>

</>
    )
}

export default Apply
