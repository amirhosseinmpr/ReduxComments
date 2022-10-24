import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlices"
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import MoodIcon from '@mui/icons-material/Mood'
import FavoriteIcon from '@mui/icons-material/Favorite'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CoffeeIcon from '@mui/icons-material/Coffee';

const reactionEmoji = {
    coffee: <CoffeeIcon />,
    heart: <FavoriteIcon />,
    rocket: <RocketLaunchIcon />,
    thumbsUp: <ThumbUpIcon />,
    wow: <MoodIcon />
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="p-2 py-3 border rounded-full mt-2 mr-2 hover:bg-black"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}
export default ReactionButtons