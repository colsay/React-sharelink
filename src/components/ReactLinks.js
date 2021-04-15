import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DeleteLink } from '../redux/links/actions';


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
                />

                <ol>
                    {links
                        .filter(item =>
                            [item.title, item.tags]
                                .map(arr => arr.toLowerCase())
                                .some(search => search.includes(searchTerm.toLowerCase()))
                        )
                        .map((item) =>
                            <li className="pt-3" key={item.id}>
                                <a href={`//${item.url}`} target="_blank">{item.title}</a>
                                <p>Tag: {item.tags}</p>
                                <button onClick={() => { deleteLink(item) }} className="btn btn-danger">delete</button>
                            </li>)}
                </ol>
            </div>
        </div>
    );
}

export default ReactLinks;