import React from 'react';
import { List, Segment } from 'semantic-ui-react'


export default function PostCard({ date, title }) {
    return(
        <Segment inverted>
            <List divided inverted relaxed>
                <List.Item>
                    <List.Content>
                        <List.Header>{date}</List.Header>
                        {title}
                    </List.Content>
                </List.Item>
            </List>
        </Segment>
    )

}
