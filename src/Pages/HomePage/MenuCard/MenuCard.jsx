
const MenuCard = ({ menu }) => {
    const { image, name, price, recipe } = menu;
    return (
        <div>
            <section className="flex justify-between space-x-4">
                <div>
                    <img src={image} alt="" style={{ borderRadius: '0 200px 200px 200px' }} className="w-[160px]" />
                </div>
                <div>
                    <h3 className="text-2xl mb-2 text-orange-400">{name}----------</h3>
                    <p className=" text-gray-400 text-sm">{recipe}</p>
                </div>
                <div>
                    <p className="text-orange-400">${price}</p>
                </div>
            </section>
        </div>
    );
};

export default MenuCard;