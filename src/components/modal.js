import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid'
import { useSelector, useDispatch } from "react-redux";
import { isCompositeComponent } from 'react-dom/test-utils';
import { Button, Form, FormGroup, Label, Input, Formtext, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AddLink, DeleteLink, loadLinkThunk } from "../redux/links/actions"

// Import actions


const ModalExample = (props) => {
    // const links = useSelector(state => state.shareLinkStore.links);
    const dispatch = useDispatch();

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const [tags, setTags] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const handletagsChange = (event) => {
        setTags(event.target.value)
    }

    const addLink = (item) => dispatch(AddLink(item))

    const handleSubmit = (event) => {
        event.preventDefault();
        let newItem = {
            name: name,
            url: url,
            tags: tags,
            id: uuidv1()
        };
        addLink(newItem);
        setName('')
        setUrl('')
        setTags('')
    }

    return (
        <div>
            <Button color="success" onClick={toggle}>Add Link</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add Your Favourite Websites</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>

                            <Label for="Name">Name</Label>
                            <Input type="text" name="email" id="exampleEmail" placeholder="Name" value={name} onChange={handleNameChange} required />

                            <Label for="URL">URL</Label>
                            <Input type="text" name="text" id="exampleText" placeholder="URL" value={url} onChange={handleUrlChange} required />

                            <Label for="Tags">Tag (1 tag only)</Label>
                            <Input type="text" name="text" id="exampleText" placeholder="Tags" value={tags} onChange={handletagsChange} />

                        </FormGroup>
                        <ModalFooter>
                            <Button type="submit" color="primary" onClick={toggle}>Submit</Button>{' '}
                            <Button color="danger" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModalExample;