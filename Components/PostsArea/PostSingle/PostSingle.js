import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appConfig from "../../../Config/appConfig";
import postFormModel from "../../../models/postFormModel";
import useAxiosForm from "../../../Services/useAxiosForm";
import useFetch from "../../../Services/useFetch";

function PostSingle({ posts }) {

    const { post_id } = useParams();

    const navigate = useNavigate();

    const post = posts.filter(p => p.id === post_id)[0];

    if (!post) {
        navigate('/posts')
        // return <Navigate to='/posts' />
    }
    const [comments] = useFetch(appConfig.posts + post_id + '/comments');

    const params = {
        ...postFormModel.del,
        url: postFormModel.del.url + post.id
    }

    const [del, response] = useAxiosForm(params);

    useEffect(() => {
        if (response) {
            navigate('/posts');
        }
    })

    return (
        <div className="PostSingle">
            <Link to={'/posts/edit/' + post_id}> Edit </Link>
            <br />
            <button onClick={del}> Delete </button>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            {comments.length && <ul>
                {comments.map(c => <li><b>{c.name}</b> - {c.body}</li>)}
            </ul>}
        </div>
    )
}
export default PostSingle;