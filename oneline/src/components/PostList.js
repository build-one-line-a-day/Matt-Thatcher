import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { route } from 'react-router-dom'
import PostSingle from './PostSingle'

import PostCard from './PostCard'


// https://my-json-server.typicode.com/mmthatch12/Oneline-fake-data

export default function PostList() {
    const[postList, setPostList] = useState([])

    useEffect(() => {
        Axios
            .get(`https://raw.githubusercontent.com/mmthatch12/Oneline-fake-data/master/db.json`)
            .then(response => {
                const theInfo = response.data.posts
                setPostList(theInfo)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])



    return (
        <div>
            {postList.map(post => {
                return (
                    <PostCard 
                        date={post.date}
                        title={post.title}
                    />
                )
            })}
            
            <route path="/post/:id" component={PostSingle} />
        </div>
    )
}