import { Link, Route, Routes } from "react-router-dom";
import appConfig from "../../../Config/appConfig";
import useAxios from "../../../Services/useAxios";
import useTitle from "../../../Services/useTitle";
import PostAdd from "../../PostsArea/PostAdd/PostAdd";
import PostSingle from "../../PostsArea/PostSingle/PostSingle";
import PostsList from "../../PostsArea/PostsList/PostsList";
import PostUpdate from "../../PostsArea/PostUpdate/PostUpdate";

function Posts() {

    useTitle('Posts');

    // const [posts, error, loading] = useFetch(appConfig.posts);
    const [posts, error, loading, setPosts] = useAxios(appConfig.posts);

    if (error) {
        return <span>Error!!!</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }


    return (
        <div className="Posts">

            <h1>Posts</h1>
            <Link to='/posts/new'>Add New Post</Link>
            <hr />

            <Routes>
                <Route path="/" element={<PostsList posts={posts} />} />
                <Route path='/:post_id' element={<PostSingle posts={posts} />} />
                <Route path='/new' element={<PostAdd posts={posts} setPosts={setPosts} />} />
                <Route path='/edit/:edit_id' element={<PostUpdate posts={posts} />} />
            </Routes>

        </div>
    )
}
export default Posts;