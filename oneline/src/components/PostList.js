import React, { useState, useEffect } from 'react'
import { List, Segment } from 'semantic-ui-react'
import Axios from 'axios'


// https://my-json-server.typicode.com/mmthatch12/Oneline-fake-data

export default function PostList() {
    const[postList, setPostList] = useState([])

    useEffect(() => {
        Axios
            .get(`https://my-json-server.typicode.com/mmthatch12/Oneline-fake-data`)
            .then(response => {
                const theInfo = response.data.posts
                setPostList(theInfo)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])



    return (
        <Segment inverted>

            {postList.map(post => {
                return (
                    <h2>{post.date}</h2>
                    <h2>{post.title}</h2>
                    <h2>{post.content}</h2>
                )
            })}


            <List divided inverted relaxed>
                <List.Item>
                    <List.Content>
                        <List.Header>Snickerdoodle</List.Header>
                        An excellent companion
                    </List.Content>
                </List.Item>
            </List>
        </Segment>
    )
}