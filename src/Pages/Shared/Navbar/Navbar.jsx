import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
        <li><NavLink to='/secret'>Secret</NavLink></li>
        <li className="items-center">
            <Link to="/dashboard/cart">
                <button className="btn bg-transparent btn-sm border">
                    <FaShoppingCart className="mr-4 text-white"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-[#15151599] px-10 bg-opacity-60 text-white fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow items-center">
                            {
                                Links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Restaurant Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {
                            Links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user?.email ? <div className='flex items-center gap-2'>
                            <p className='hidden md:block '>{user?.displayName}</p>
                            <img referrerPolicy='no-referrer' className='h-[40px] rounded-full mr-2' src={user?.photoURL} alt="image" />
                        </div> : ''
                    }
                    {
                        user && user?.email ?
                            <Link to='/'><button onClick={logOut} className="btn btn-error text-white">Log-Out</button></Link>
                            : <Link to='/login'><button className="btn bg-[#15151599] text-white">Log-In</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;