import PostCard from "../PostCard/PostCard";

function PostsList({ posts }) {


    return (
        <div className="PostsList">
            {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    )
}
export default PostsList;