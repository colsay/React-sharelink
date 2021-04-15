import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DeleteLink } from '../redux/links/actions';
import { Card, CardTitle, CardText } from 'reactstrap';


const ReactLinks = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const links = useSelector(state => state.shareLinkStore.links)
    const dispatch = useDispatch();

    const deleteLink = (id) => dispatch(DeleteLink(id))

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="p-2 d-flex justify-content-center">
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                    style={{ width: '300px' }}
                />
                <hr></hr>
                {links
                    .filter(item =>
                        [item.title, item.tags]
                            .map(arr => arr.toLowerCase())
                            .some(search => search.includes(searchTerm.toLowerCase()))
                    )
                    .map((item) =>
                        <Card body className="p-0">
                            <CardTitle className="pt-1 mb-0" key={item.id}><a href={`//${item.url}`} target="_blank">{item.title}</a></CardTitle>
                            <CardText>Tag: {item.tags} <button onClick={() => { deleteLink(item) }} className="m-2 btn btn-danger">Delete</button></CardText>
                        </Card>
                    )
                }
            </div>
        </div>
    );
}

export default ReactLinks;