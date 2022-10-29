import { useEffect } from "react"
import { nanoid } from '@reduxjs/toolkit'
import {
    useSelector,
    useDispatch
} from "react-redux"
import {
    fetchPosts,
    getPostsError,
    getPostsStatus,
    selectAllPosts,
} from "./postsSlices"
import PostsExcerpt from "./PostsExcerpt"


const PostList = () => {

    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {

        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={nanoid} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }
    return <section>
        <h2 className="text-2xl my-5 font-bold h-10 w-full text-center"> Comandes</h2>
        {content}
    </section>
}

export default PostList