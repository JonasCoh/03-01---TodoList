import axios from "axios";
import { useRef, useState } from "react";
import appConfig from "../../../Config/appConfig";
import useAuth from "../../../Services/useAuth";

function Register() {

    const { loginUser } = useAuth();

    const form = {
        email: '',
        password: '',
    }

    const button = useRef();
    const loading = () => button.current.classList.toggle('load');

    const [data, setData] = useState(form);
    const [err, setErr] = useState('');

    const update = e => {
        const val = e.target.value;
        const name = e.target.name;
        setData({ ...data, [name]: val });
    }

    const send = e => {
        e.preventDefault();

        loading()
        setErr('');

        axios.post(appConfig.register, data)
            .then(response => loginUser(response.data))
            .catch(err => setErr(err.response.data))
            .finally(loading());
    }


    return (
        <div className="Register">
            <h1>Register</h1>
            <hr />

            <form onSubmit={send}>

                <label>
                    <span>Email</span>
                    <input type="text" name='email' value={data.email} onChange={update} />
                </label>

                <label>
                    <span>Password</span>
                    <input type="text" name='password' value={data.password} onChange={update} />
                </label>

                <br />
                {/* <button ref={button} className={loading ? 'load' : ''}>Register <span className="loader"></span></button> */}
                <button ref={button} >Register <span className="loader"></span></button>

                <br />
                <span>{err}</span>

            </form>

        </div >
    )
}
export default Register