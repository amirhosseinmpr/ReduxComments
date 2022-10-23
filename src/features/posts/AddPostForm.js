import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from "./postsSlices"

const AddPostForm = () => {

    const InputStyles = 'py-2 text-lg font-thine'
    const TextStyle = 'h-10 rounded-lg text-[#730c9a] px-2 py-3'

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const dispatch = useDispatch

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
            setTitle('')
            setContent('')
        }
    }

    return <section>
        <h2 className="text-2xl my-5 font-bold h-10 w-full text-center">Add a New Comments </h2>
        <form className="grid bg-gray-600 px-10 py-10 rounded-lg border">
            <label htmlFor="postTitle" className={InputStyles}>Title :</label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
                className={TextStyle}
            />
            <label htmlFor="postTitle" className={InputStyles}>content :</label>
            <textarea
                id="postContent"
                type="text"
                name="postContent"
                value={content}
                onChange={onContentChanged}
                className={`${TextStyle} h-32`}
            />
            <button type="button" onClick={onSavePostClicked} className='mt-5 font-semibold rounded-lg h-10 bg-[#730c9a]'> Save Comandes</button>
        </form>
    </section>
}

export default AddPostForm