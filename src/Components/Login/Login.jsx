import React, { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <section className='bg-gray-100 py-10 px-20'>
            <div className="hero bg-gray-100 border-2 border-black max-w-3xl mx-auto">
                <div className="hero-content flex-col lg:flex-row py-5">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card bg-gray-100 w-full max-w-sm">
                        <form onSubmit={handleLogin} className="card-body">
                            <h2 className="text-3xl font-bold text-center">Login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="Type the captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" disabled={disabled} value="Login" className="btn bg-[#D1A054B3] text-white" />
                            </div>
                        </form>
                        <p className='text-center'>Don't Have An Account?{" "}
                            <Link to="/signup" className='text-red-500'>SignUp</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;