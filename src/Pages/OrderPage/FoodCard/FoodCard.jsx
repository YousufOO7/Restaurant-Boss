

const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
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
                    <button className="btn border-t-0 border-l-0 border-r-0 border-b-4 border-orange-400 bg-gray-300 hover:bg-black text-orange-400 uppercase">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;