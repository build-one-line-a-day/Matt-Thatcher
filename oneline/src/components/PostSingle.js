import React from 'react';


export default function PostSingle({ title, date, content }) {
    return (

        <div>
            <h1>Post Single</h1>
            <h2>{date}</h2>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}