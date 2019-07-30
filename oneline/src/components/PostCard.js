import React from 'react';
import styled from 'styled-components'
import '../App.css';

const PostCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
`;

const Title = styled.h2`
    font-family: 'Open Sans';
`;

const Content = styled.p`
    font-family: 'Montserrat'
`;





export default function PostCard({ date, title }) {
    return(
        <PostCardDiv>
            <Title>{date}</Title>
            <Content>{title}</Content>
        </PostCardDiv>

    )

}
