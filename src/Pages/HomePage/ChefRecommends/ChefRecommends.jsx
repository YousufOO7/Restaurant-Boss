import { useEffect, useState } from "react";
import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import axios from "axios";

const ChefRecommends = () => {
    const [recommended, setRecommended] = useState([]);
    useEffect(() => {
        axios.get('./menu.json')
            .then(res => setRecommended(res.data.slice(1, 4)))
    }, [])
    return (
        <div>
            <SharedTitle
                subHeading={"Should try"}
                heading={"Chef Recommends"}
            ></SharedTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
                {
                    recommended.map(rec => <div
                        key={rec._id}
                        className=" bg-gray-100 ">
                        <figure>
                            <img
                                src={rec.image}
                                alt={rec.name}
                                className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">{rec.name}</h2>
                            <p className="text-gray-600 mb-2 text-sm">{rec.recipe}</p>
                            <div className="card-actions">
                                <button className="btn border-t-0 border-l-0 border-r-0 border-b-4 border-orange-400 bg-gray-300 hover:bg-black text-orange-400 uppercase">Add to Card</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;