import React from 'react'
import PostAutor from "./PostAutor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const PostsExcerpt = ({ post }) => {
    return <div className="border rounded-lg my-5 text-start px-10 py-10 bg-gray-600 hover:bg-[#730c9a]">
        <h1 className="text-xl font-bold pb-2">{post.title}</h1>
        <p>{post.body.substring(0, 100)}</p>
        <p><PostAutor userId={post.userId} />
            <TimeAgo timestamp={post.date} /></p>
        <div className="flex justify-left items-left">
            <ReactionButtons post={post} />
        </div>
    </div>
}

export default PostsExcerpt