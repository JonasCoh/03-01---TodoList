import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../Context/AuthContext/AuthContext";

function useAuth() {

    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginUser = data => {
        toast("Logged IN!")
        setAuth({ type: 'LOGIN', payload: data });
        sessionStorage.setItem('user', JSON.stringify(data));
        navigate('/home');
    }

    const logoutUser = () => {
        setAuth({ type: 'LOGOUT' });
        sessionStorage.removeItem('user');
        navigate('/home');
    }

    const user = auth;
    const accessToken = auth?.accessToken;

    return { user, loginUser, logoutUser, accessToken }

}
export default useAuth;