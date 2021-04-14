import React, { useState } from 'react';
import modal from './modal'
import { useSelector, useDispatch } from "react-redux";
import { DeleteLink, loadLinkThunk } from '../redux/links/actions';


const ReactLinks = ({ item, remove }) => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const links = useSelector(state => state.shareLinkStore.links)
    const dispatch = useDispatch();

    const deleteLink = (id) => dispatch(DeleteLink(id))

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    // const results = !searchTerm
    //     ? item
    //     : item.filter(a =>
    //         a.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    //     );

    return (
        <div className="p-2 d-flex justify-content-center">
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />

                {/* {results.map(item => (
                    <div>
                        <a href={`//${item.url}`}>{item.name}</a>
                        <p>Tags: {item.tags}</p>
                    </div>
                ))} */}

            </div>
            <button onClick={() => dispatch(loadLinkThunk())}>load links</button>
            <div>
                <ol>
                    {links.map((item) =>
                        <li className="pt-3" key={item.id}>
                            <a href={`${item.url}`}>{item.name}</a>
                            <p>Tags: {item.tags}</p>
                            <button onClick={() => { deleteLink(item) }} className="btn btn-danger">delete</button>
                        </li>)}
                </ol>
            </div>
        </div>
    );
}

export default ReactLinks;