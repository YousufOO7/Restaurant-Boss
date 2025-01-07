import { useLoaderData } from "react-router-dom";
import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import React from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const image_hosting = import.meta.env.VITE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

const UpdateItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {name, category, price, recipe, _id} = useLoaderData();


    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // now sent to data to the menu database
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your item has been updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div>
            <SharedTitle heading={"Update Item"}></SharedTitle>


            <div className="card bg-gray-200 w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Enter Recipe Name" className="input input-bordered w-full " />
                    </div>

                    <div className='flex gap-6'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recipe name*</span>
                            </label>
                            <select
                                defaultValue={category}
                                {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value={"default"}>Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desert">Deserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input defaultValue={price} {...register("price", { required: true })} type="number" placeholder="Enter Your Price" className="input input-bordered w-full " />
                        </div>
                    </div>

                    {/* recipe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Category Details</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>

                    <div className='form-control w-full my-6'>
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className='btn bg-[#D1A054] text-white'>
                        Update Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;