import React, { useState } from 'react';
import modal from './modal'

const ReactLinks = ({ item, remove }) => {




    return (
        <div className="p-2 d-flex justify-content-center">
            <ol>
                {item.map((item) =>
                    <li className="pt-3" key={item.id}>
                        <a href={`//${item.url}`}>{item.name}</a>
                        <p>Tags: {item.tags}</p>
                        <button onClick={() => remove(item.id)} className="btn btn-danger">delete</button>
                    </li>)}
            </ol>
        </div>
    );
}

export default ReactLinks;