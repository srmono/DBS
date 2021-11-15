import axios from 'axios'
import React, {useState, useEffect} from 'react'


function HookEffectById() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1);
    const [btnId, setBtnId] = useState(1);

    useEffect( () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
            .then(response => {
                console.log(response.data)
                setPost(response.data)
            })
            .catch(err => console.log((err)))
    }, [btnId])

    const handleClick = () => {
        setBtnId(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Get post</button>

            <h3> {post.title}</h3>
            {/* <ul>
                {
                    posts.length ?
                        posts.map( post => <li key={post.id}> { post.title} </li>) :
                        null
                }
            </ul> */}
        </div>
    )
}

export default HookEffectById
