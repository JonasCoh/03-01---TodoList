import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import postFormModel from '../../../models/postFormModel';
import useAxiosForm from '../../../Services/useAxiosForm';
import useForm from '../../../Services/useForm';
import './PostUpdate.css';

function PostUpdate({ posts }) {

    const { edit_id } = useParams();

    const navigate = useNavigate();
    const post = posts.filter(p => p.id === +edit_id)[0];

    useEffect(() => {
        if (!post) {
            navigate('/posts');
        }
    })

    const fields = { ...postFormModel.fields }

    useEffect(() => {
        fields.title.value = post.title;
        fields.body.value = post.body;
        fields.userId.value = post.userId;
    }, [fields.title, fields.body, fields.userId, post.title, post.body, post.userId])


    const [init, errors, data] = useForm(fields);

    const params = {
        ...postFormModel.update,
        data: data,
        url: postFormModel.update.url + post.id
    }

    const [send] = useAxiosForm(params);

    return (
        <div className="PostUpdate">

            <form onSubmit={send}>

                <label>
                    <label> Title </label>
                    <input type="text" name='title'  {...init('title')} />
                    {errors.title && <div>{errors.title}</div>}
                </label>

                <label>
                    <label> Body </label>
                    <input type="text" name='body' {...init('body')} />
                    {errors.body && <div>{errors.body}</div>}
                </label>

                <label>
                    <label> userId </label>
                    <input type="number" name='userId' {...init('userId')} />
                    {errors.userId && <div>{errors.userId}</div>}
                </label>



                <button> Send </button>
                <br />

            </form>

        </div>
    )


}
export default PostUpdate;