import postFormModel from '../../../models/postFormModel';
import useAxiosForm from '../../../Services/useAxiosForm';
import useForm from '../../../Services/useForm';
import './PostAdd.css';


function PostAdd() {

    const [init, errors, data, reset] = useForm(postFormModel.fields);

    const params = { ...postFormModel.add, data: data };
    const [send, response] = useAxiosForm(params);

    if (response) {
        console.log(response);
    }

    return (
        <div className="PostAdd">

            <form onSubmit={send}>

                <label>
                    <label> Title </label>
                    <input type="text" name='title' {...init('title')} />
                    {errors.title && <div> {errors.title} </div>}
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
                <button onClick={reset}> Reset </button>
                <br />

            </form>

        </div>
    )


}
export default PostAdd;