import React from 'react';
import MenuCard from '../../HomePage/MenuCard/MenuCard';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div>
            { title && <Cover img={coverImg} titles={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-6xl mx-auto my-10">
                {
                    items.map(menu => <MenuCard key={menu._id} menu={menu}></MenuCard>)
                }
            </div>
            <div className='flex justify-center my-2'>
                <Link to={`/order/${title}`}>
                <button className=" py-2 px-5 rounded-lg border-0 border-b-2 border-black uppercase">Order your favourite food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;