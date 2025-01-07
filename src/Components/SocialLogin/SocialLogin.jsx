import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user);
                const userInfo = {
                    email: user?.email,
                    name: user.displayName
                }
                console.log(userInfo);
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(location?.state ? location?.state : '/')
                    })
                    .catch(error => {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            })

    }


    return (
        <div>
            <button onClick={handleGoogleLogIn} className='btn bg-[#D1A054B3] w-full flex mx-auto mt-3'> <FcGoogle className='text-2xl'></FcGoogle> Google</button>
            <div className="divider">OR</div>
        </div>
    );
};

export default SocialLogin;