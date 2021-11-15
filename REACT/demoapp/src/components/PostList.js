import axios from 'axios';
import React, { Component } from 'react';


class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }

    componentDidMount(){
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then( response => {
//                console.log(response.data)
                this.setState({
                    posts: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    render() {
        const { posts} = this.state;

        return (
            <div>
                {
                    posts.length ? 
                        posts.map( post => <h3 key={post.id}> {post.title}  </h3>) :
                        null
                }
            </div>
        )
    }
}

export default PostList
