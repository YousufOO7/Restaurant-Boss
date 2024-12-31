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
import { Helmet } from "react-helmet-async";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(items => items.category === 'dessert')
    const soup = menu.filter(items => items.category === 'soup')
    const salad = menu.filter(items => items.category === 'salad')
    const pizza = menu.filter(items => items.category === 'pizza')
    const offered = menu.filter(items => items.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Boss | Menu</title>
            </Helmet>

            <Cover img={menuIgm} title={"Our menu"}></Cover>
            <SharedTitle subHeading={"Don't Miss"} heading={"Today's offer"}></SharedTitle>

            <MenuCategory items={offered}></MenuCategory>
            {/* dessert category */}
            <ImgWithText items={desserts} coverImg={dessertImg} title={"dessert"}></ImgWithText>

            {/* pizza category */}
            <ImgWithText items={pizza} coverImg={pizzaImg} title={"pizza"}></ImgWithText>

            {/* salad category */}
            <ImgWithText items={salad} coverImg={saladImg} title={"salad"}></ImgWithText>

            {/* soup category */}
            <ImgWithText items={soup} coverImg={soupImg} title={"soup"}></ImgWithText>
        </div>
    );
};

export default Menu;