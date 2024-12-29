import { useEffect, useState } from "react";
import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import axios from 'axios';
import MenuCard from "../MenuCard/MenuCard";

const MainMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        axios.get('./menu.json')
            .then(res => {
                const filterByCategory = res.data.filter(items => items.category === 'popular')
                setMenus(filterByCategory);
            })
    }, [])
    return (
        <section>
            <SharedTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            ></SharedTitle>
            <div className="grid md:grid-cols-2 gap-4 mt-10">
                {
                    menus.map(menu => <MenuCard key={menu._id} menu={menu}></MenuCard>)
                }
            </div>
            <div className="flex justify-center my-3">
                <button className="btn border-b-4 border-black uppercase">View Full Menu</button>
            </div>

            <div className="my-10">
                <div
                    className="hero bg-cover h-[200px] max-w-3xl mx-auto bg-black"
                    style={{
                        backgroundImage: `url()`,
                    }}>
                    <div className="hero-content text-center  text-white">
                        <div className="max-w-sm">
                            <h1 className=" text-4xl font-semibold">+88 01837308476</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainMenu;