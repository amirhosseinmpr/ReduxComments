import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlices";

const PostAutor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const authore = users.find(user => user.id === userId)

    return <span className="text-lg underline"> by {authore ? authore.name : 'unKnow author'}</span>
}

export default PostAutor