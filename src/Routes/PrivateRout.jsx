import { Children, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>;
};

export default PrivateRout;