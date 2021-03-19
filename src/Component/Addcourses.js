import { Button } from "bootstrap";
import React, {Fragment} from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";

const addcourse=()=>{
    return( 
    <Fragment>
    <h1 className="text-center my-3">Fill Course Details</h1>
    <Form>
    <FormGroup>
    <label for= "userId">Course Id</label>
    <Input 
    type ="text" 
    placeholder= "Enter Name" 
    name="userId" 
    id="userId" />
    </FormGroup>

    <FormGroup>
    <label for= "title">Course Title</label>
    <Input 
    type ="text" 
    placeholder= "Enter Title" 
    id="title" />
    </FormGroup>

    <FormGroup>
    <label for= "description">Course Description</label>
    <Input 
    type ="textarea" 
    placeholder= "Enter Description" 
    id="description" 
    />
    </FormGroup>

    <Container>
    <Button color="Success"> Add Courses</Button>
    <Button color="Warning"> Clear</Button>
    </Container>
    
    
    </Form>
    </Fragment>
    );
};

export default addcourse;
