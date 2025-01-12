import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});
const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `bearer ${token}`
        // console.log("request stop by interceptors", token)
        return config
    }, function (error) {
        return Promise.reject(error);
    })

    useEffect(() => {
        axiosSecure.interceptors.response.use(function (response) {
            return ('this is a response', response);
        }, async (error) => {

            const status = error.response.status;
            console.log('this is a logout', status);
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login');
            }

            return Promise.reject(error);
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;