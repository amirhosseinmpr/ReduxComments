import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlices"

const PostList = () => {

    const posts = useSelector(selectAllPosts)

    const renderdPostes = posts.map(i => <article className="border rounded-lg my-5 text-start px-10 py-10 bg-gray-600 hover:bg-[#730c9a]" key={i.id}>
        <h1 className="text-xl font-bold pb-2">{i.title}</h1>
        <p>{i.content.substring(0, 100)}</p>
    </article>)
    return <section>
        <h2 className="text-2xl my-5 font-bold h-10 w-full text-center"> Comandes</h2>
        {renderdPostes}
    </section>
}

export default PostList