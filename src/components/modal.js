import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Formtext, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="success" onClick={toggle}>Add Link</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input type="text" name="email" id="exampleEmail" placeholder="Name" />
                            <Label for="exampleText">URL</Label>
                            <Input type="text" name="text" id="exampleText" placeholder="URL" />
                            <Label for="exampleText">Tags</Label>
                            <Input type="text" name="text" id="exampleText" placeholder="Tags" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;