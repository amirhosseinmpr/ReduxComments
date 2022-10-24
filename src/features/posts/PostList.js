import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlices"
import PostAutor from "./PostAutor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const PostList = () => {

    const posts = useSelector(selectAllPosts)

    const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderdPostes = orderPosts.map(i => <div className="border rounded-lg my-5 text-start px-10 py-10 bg-gray-600 hover:bg-[#730c9a]" key={i.id}>
        <h1 className="text-xl font-bold pb-2">{i.title}</h1>
        <p>{i.content.substring(0, 100)}</p>
        <p><PostAutor userId={i.userId} />
            <TimeAgo timestamp={i.date} /></p>
        <div className="flex justify-left items-left">
            <ReactionButtons post={i} />
        </div>
    </div>)
    return <section>
        <h2 className="text-2xl my-5 font-bold h-10 w-full text-center"> Comandes</h2>
        {renderdPostes}
    </section>
}

export default PostList