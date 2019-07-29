import React from 'react';
import styled from 'styled-components'
import '../App.css';

const Title = styled.h2`
    font-family: 'Open Sans';
`;

const Content = styled.p`
    font-family: 'Montserrat'
`;



export default function PostCard({ date, title }) {
    return(
        <div>
            <Title>{date}</Title>
            <Content>{title}</Content>
        </div>

    )

}
