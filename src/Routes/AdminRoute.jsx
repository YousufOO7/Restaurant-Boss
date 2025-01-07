import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(user?.email)
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;