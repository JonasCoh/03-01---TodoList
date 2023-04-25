import { useState } from 'react';
import './PostAdd.css';
import axios from 'axios';
import appConfig from '../../../Config/appConfig';

function PostAdd() {

    const [state, setState] = useState(0);

    const sendNewPost = e => {
        e.preventDefault();

        // const elements = e.target.elements
        // const title = elements.title.value;
        // const body = elements.body.value;

        const formData = new FormData(e.target);
        formData.append('userId', 1);

        let data = Object.fromEntries(formData);

        axios.post(appConfig.posts, data)
            .then(response => console.log(response.data))
            .catch(err => console.log(err.message))

    }

    return (
        <div className="PostAdd">
            <form onSubmit={sendNewPost} encType='multipart/form-datas'>

                <label>
                    <span>Title</span><br />
                    <input type="text" name="title" />
                </label>

                <br />

                <label>
                    <span>Content </span><br />
                    <textarea name="body"></textarea>
                </label>

                <br />

                <button> Save post </button>

            </form>

            <br />
            <button onClick={() => setState(state + 1)}> Set State ({state}) </button>
        </div>
    )
}
export default PostAdd;