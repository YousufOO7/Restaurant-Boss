import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleDeleteUser = user => {
        console.log(user);
        Swal.fire({
            title: "Are you sure!",
            text: "You won't be able to revert it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    }

    const handleAdminUser = user => {
        Swal.fire({
            title: "Are you sure!",
            text: `You want to make ${user.name} Admin!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make it!"
        }).then( (result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user?._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Update!",
                                text: `${user.name} is now admin!`,
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    }

    return (
        <div className="my-5">
            <SharedTitle subHeading={"How Many??"} heading={"Manage All Users"}></SharedTitle>

            <div>
                <h2 className="text-md md:text-xl lg:text-3xl font-semibold uppercase">total users: {users?.length}</h2>
            </div>

            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, idx) => <tr
                                key={user._id}
                            >
                                <th>{idx + 1}</th>
                                <td>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === "Admin" ? "Admin" : <button
                                            onClick={() => handleAdminUser(user)}
                                            className="btn bg-[#D1A054B3]">
                                            <FaUsers className="text-white text-xl"></FaUsers>
                                        </button>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-md"
                                    >
                                        <FaTrash className="text-2xl text-red-600"></FaTrash>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;