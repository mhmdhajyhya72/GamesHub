// src/components/ReportProblem.js

import React, { useState } from 'react';
import Navigation from './Navigation';
import { auth, db } from "../firebase/firebase";
import { Button, Form, InputGroup, Container } from "react-bootstrap";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const ReportProblem = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    category: '',
    screenshot: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      screenshot: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert("successfully got the reported message");
    // Implement the logic to submit the form data or notify the team here.
    // Optionally, you can display a confirmation message to the user.
  };

  return (
    
    <div
      style={{
        background: 'linear-gradient(to right, #189, #118)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#fff',
        textAlign: 'center'

      }}
    >
        <Navigation/>
        <div className="inputclass">
        <Container>
        <h5 id="mytextjambo">Report a Problem</h5>
        <br></br>
<Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Prepend className="inputlabel">Name</InputGroup.Prepend>
              <Form.Control
               
                type="text"
                name="name"
                id="inputtext"
                placeholder="Your Name"
                value={formData.name}
                onChange={e => this.setState(byPropKey("name", e.target.value))}
              />
            </InputGroup>
            <br></br>
            <InputGroup>
              <InputGroup.Prepend className="inputlabel">Email</InputGroup.Prepend>
              <Form.Control
                type="text"
                name="name"
                id="inputtext"
                placeholder="Your Email"
                value={formData.email}
                onChange={e => this.setState(byPropKey("email", e.target.value))}
              />
            </InputGroup>
            <br></br>
            <InputGroup>
              <InputGroup.Prepend className="inputlabel">Desription</InputGroup.Prepend>
              <Form.Control
                type="text"
                name="name"
                id="inputtext"
                placeholder="Write the Description of the problem"
                value={formData.description}
                onChange={e => this.setState(byPropKey("description", e.target.value))}
              />
            </InputGroup>
            <br></br>
            <InputGroup>
              <InputGroup.Prepend className="inputlabel">Category</InputGroup.Prepend>
              <Form.Control
                type="text"
                name="name"
                id="inputtext"
                placeholder="Which Category you have the problem "
                value={formData.category}
                onChange={e => this.setState(byPropKey("category", e.target.value))}
              />
            </InputGroup><br></br>
            <InputGroup>
            
              <InputGroup.Prepend className="inputlabel">upload some Screenshots or videos to we Can see your problem clearly</InputGroup.Prepend>
              
              <Form.Control
              
                type="file"
                name="name"
                id="file"
                placeholder="Choose a File"
                value={formData.screenshot}
                onChange={e => this.setState(byPropKey("screenshot", e.target.value))}
              />
            </InputGroup>
            <br/>
            <div className="text-center">
              <Button disabled={false} type="submit" id="mybutton">
                Save Changes
              </Button>
            </div>
          </Form>
          </Container>
      </div>

    </div>
  );
};

export default ReportProblem;



