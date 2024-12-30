import Banner from "../HomePage/Banner/Banner";
import BgBistro from "../HomePage/Category/BgBistro";
import Category from "../HomePage/Category/Category";
import ChefRecommends from "../HomePage/ChefRecommends/ChefRecommends";
import Featured from "../HomePage/Featured/Featured";
import MainMenu from "../HomePage/MainMenu/MainMenu";
import Testimonials from "../HomePage/Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
                <Category></Category>
                <BgBistro></BgBistro>
                <MainMenu></MainMenu>
                <ChefRecommends></ChefRecommends>
            </div>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;