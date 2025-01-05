import { FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-72 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <FaWallet></FaWallet>
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaBook></FaBook>
                            Add Reviews
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <FaList></FaList>
                            My Booking
                        </NavLink>
                    </li>

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard main outlet */}
            <div className="w-full flex-1 max-w-4xl mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;