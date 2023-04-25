import axios from "axios";
import { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./authReducer";

function AuthProvider({ children }) {

    const user = JSON.parse(sessionStorage.getItem('user'))
    const [auth, setAuth] = useReducer(authReducer, user);

    if (auth) {
        axios.interceptors.request.use((config) => {
            config.headers = { Authorization: "Bearer " + auth.accessToken }
            return config;
        })
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider