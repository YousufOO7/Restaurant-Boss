import Cover from "../../Shared/Cover/Cover";

import useMenu from "../../../Hooks/useMenu";
import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import ImgWithText from "../../Shared/ImgWithText/ImgWithText";

import menuIgm from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(items => items.category === 'dessert')
    const soup = menu.filter(items => items.category === 'soup')
    const salad = menu.filter(items => items.category === 'salad')
    const pizza = menu.filter(items => items.category === 'pizza')
    const offered = menu.filter(items => items.category === 'offered')
    return (
        <div>
            <Cover img={menuIgm} title={"Our menu"}></Cover>
            <SharedTitle subHeading={"Don't Miss"} heading={"Today's offer"}></SharedTitle>

            <MenuCategory items={offered}></MenuCategory>
            {/* dessert category */}
            <ImgWithText coverImg={dessertImg} title={"dessert"}></ImgWithText>
            <MenuCategory items={desserts}></MenuCategory>

            {/* pizza category */}
            <ImgWithText coverImg={pizzaImg} title={"pizza"}></ImgWithText>
            <MenuCategory items={pizza}></MenuCategory>

            {/* salad category */}
            <ImgWithText coverImg={saladImg} title={"salad"}></ImgWithText>
            <MenuCategory items={salad}></MenuCategory>

            {/* soup category */}
            <ImgWithText coverImg={soupImg} title={"Soup"}></ImgWithText>
            <MenuCategory items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;