import PostList from "./features/posts/PostList"
import AddPostForm from "./features/posts/AddPostForm"
function App() {
  return <div className="bg-black text-white flex w-full items-center justify-center h-full">
    <div>
      <AddPostForm />
      <PostList />
    </div>
  </div>
}

export default App
