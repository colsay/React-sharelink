import React, { useState } from 'react';
import modal from './modal'

const ReactLinks = ({ item, remove }) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const results = !searchTerm
        ? item
        : item.filter(a =>
            a.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );

    return (


        <div className="p-2 d-flex justify-content-center">
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />

                {results.map(item => (
                    <div>
                        <a href={`//${item.url}`}>{item.name}</a>
                        <p>Tags: {item.tags}</p>
                    </div>
                ))}

            </div>
            <div>
                <ol>
                    {item.map((item) =>
                        <li className="pt-3" key={item.id}>
                            <a href={`//${item.url}`}>{item.name}</a>
                            <p>Tags: {item.tags}</p>
                            <button onClick={() => remove(item.id)} className="btn btn-danger">delete</button>
                        </li>)}
                </ol>
            </div>
        </div>
    );
}

export default ReactLinks;