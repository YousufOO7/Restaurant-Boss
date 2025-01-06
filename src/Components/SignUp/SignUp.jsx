import { Link, useNavigate } from 'react-router-dom';
import signUpImg from '../../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../SocialLogin/SocialLogin';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { createNewUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const onSubmit = data => {
        console.log(data);
        createNewUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile({ displayName: data.name, photoURL: data.photoURL });
                // send user data to database
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate("/")
                        }
                    })

            })
    }

    return (
        <section className='bg-gray-100 py-10 px-20'>
            <div className="hero bg-gray-100 border-2 border-black max-w-3xl mx-auto">
                <div className="hero-content flex-col lg:flex-row py-5">
                    <div className="text-center lg:text-left">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card bg-gray-100 w-full max-w-sm">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className="text-3xl font-bold text-center">SignUp</h2>
                            <SocialLogin></SocialLogin>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} name='name' placeholder="name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} placeholder="photo URL" className="input input-bordered" required />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name='email' placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered" />
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowPassword(!showPassword);
                                    }}
                                    className="btn btn-xs absolute right-4 top-12"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn bg-[#D1A054B3] text-white" />
                            </div>
                        </form>
                        <p className='text-center'>Don't Have An Account?{" "}
                            <Link to="/login" className='text-red-500'>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;