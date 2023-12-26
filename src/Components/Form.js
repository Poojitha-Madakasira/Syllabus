import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import Multiselect from 'multiselect-react-dropdown';

const SyForm = (formProps) =>
{
    const {index, card, saveForm, cancelForm} = formProps
    const [title, setTitle] = useState(card.title || "");
    const [description, setDescription] = useState(card.description || "");
    const [objectives, setObjectives] = useState(card.objectives || "");

    const handleSaveForm = () => {
        const formDetails = { 
            title: title, 
            description: description, 
            objectives: objectives, 
            editMode: false ,
            cancelStatus: true,
        };
        saveForm(index, formDetails);
    };


    return(
        <div>
            <Form>
                <Form.Group as={Row} controlId="title">
                    <Col></Col>
                    <Form.Label column sm="2">Title</Form.Label>
                    <Col sm="7">
                    <Form.Control type="text" placeholder="Enter title" value={title}
                    onChange={(event) => setTitle(event.target.value)}/>
                    {/* // onChange={(e) => setFormDetails({ ...formDetails, title: e.target.value })}/> */}
                    </Col>
                    <Col></Col>
                </Form.Group>
                <Form.Group as={Row} controlId="description">
                    <Col></Col>
                    <Form.Label column sm="2">Description</Form.Label>
                    <Col sm="7">
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description}
                    onChange={(event) => setDescription(event.target.value)}/>
                    {/* // onChange={(e) => setFormDetails({ ...formDetails, description: e.target.value })}/> */}
                    </Col>
                    <Col></Col>
                </Form.Group>
                <Form.Group as={Row} controlId="learning outcomes">
                    <Col></Col>
                    <Form.Label column sm="2">Learning outcomes</Form.Label>
                    <Col sm="7">
                    <Form.Control type="text" placeholder="Enter learning outcomes" value={objectives}
                    onChange={(event) => setObjectives(event.target.value)}/>
                    {/* // onChange={(e) => setFormDetails({ ...formDetails, objectives: e.target.value })}/> */}
                    </Col>
                    <Col></Col>
                </Form.Group>
                <center>
                    <Button onClick={handleSaveForm} variant="primary" >Save</Button>
                    <Button onClick={cancelForm} variant="primary">cancel</Button>
                </center>
            </Form>
        </div>
    )
}

export default SyForm;