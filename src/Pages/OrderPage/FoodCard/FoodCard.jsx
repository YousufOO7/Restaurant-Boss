import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from 'sweetalert2'
import axios from 'axios';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ , refetch] = useCart();

    const handleAddToCard = () => {
        if (user && user?.email) {
            const cartItem = {
                menuId: _id,
                name,
                email: user.email,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    // send to database to the cart
                    refetch();
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in!",
                text: "Please login to add to the card!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });
                }
            });
        }
    }
    return (
        <div className="card bg-gray-100 ">
            <figure>
                <img
                    src={image}
                    alt="Shoes"
                    className="w-full" />
            </figure>
            <p className="absolute right-0 mt-4 mr-4 p-2 bg-slate-900 text-white">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className="text-gray-600 mb-2 text-sm">{recipe}</p>
                <div className="card-actions">
                    <button
                        onClick={handleAddToCard}
                        className="btn border-t-0 border-l-0 border-r-0 border-b-4 border-orange-400 bg-gray-300 hover:bg-black text-orange-400 uppercase">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;