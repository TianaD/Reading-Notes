import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function form(props) {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Queue</Form.Label>
                <Form.Control type="text" placeholder="Who's Next?" />
            </Form.Group>
            <Button onClick={props.setnamesOfPeopleInTheQueue()}>
                Join Queue
            </Button>
        </Form>
    );
}

export default form;