import { useState } from "react"
import {
    useDispatch,
    useSelector
} from "react-redux"

import { postAdded } from "./postsSlices"
import { selectAllUsers } from "../users/usersSlices"

const AddPostForm = () => {

    const InputStyles = 'py-2 text-lg font-thine'
    const TextStyle = 'h-10 rounded-lg text-[#730c9a] px-2 py-3'

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(users => <option key={users.id} value={users.id}>
        {users.name}
    </option>)

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

            <label htmlFor="postAuthor" className={InputStyles}>Authore:</label>
            <select id="postAuthor" value={userId} onChange={onAuthorChanged} className={TextStyle}>
                <option value=""></option>

                {usersOptions}
            </select>
            <label htmlFor="postTitle" className={InputStyles}>content :</label>
            <textarea
                id="postContent"
                type="text"
                name="postContent"
                value={content}
                onChange={onContentChanged}
                className={`${TextStyle} h-32`}
            />
            <button
                type="button"
                onClick={onSavePostClicked}
                className={`mt-5 font-semibold rounded-lg h-10 ${canSave ? 'bg-[#730c9a]' : 'bg-[#560d322e] font-thin text-sm'}`}
                disabled={!canSave}
            > {canSave ? 'Save Comandes' : 'Please answread that faild '}</button>
        </form>
    </section>
}

export default AddPostForm
