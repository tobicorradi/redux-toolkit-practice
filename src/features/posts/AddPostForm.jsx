import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'

const AddPostForm = () => {
    const dispatch = useDispatch()
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && content){
            dispatch(postAdded({
                id: nanoid(),
                title,
                content
            }))
            setTitle('')
            setContent('')
        }
    }

    return (
    <section>
        <h2>Add New Post</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="postContent">Post Content:</label>
                <input type="text" id="postContent" name="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button type="submit">Submit Post</button>
        </form>
    </section>
  )
}

export default AddPostForm