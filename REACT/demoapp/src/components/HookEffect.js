import axios from 'axios'
import React, {useState, useEffect} from 'react'


function HookEffect() {
    const [posts, setPosts] = useState([])

    //componentDidMount()
    //componentDidUpdate()

    useEffect( () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(err => console.log((err)))
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.length ?
                        posts.map( post => <li key={post.id}> { post.title} </li>) :
                        null
                }
            </ul>
        </div>
    )
}

export default HookEffect
