import { Link } from 'react-router-dom';
import './PostCard.css'

function PostCard({ post }) {

    return (
        <div className="PostCard">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button><Link to={`/posts/${post.id}`}> Read more </Link></button>
        </div>
    )
}
export default PostCard;