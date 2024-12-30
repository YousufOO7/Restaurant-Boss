import Banner from "../HomePage/Banner/Banner";
import BgBistro from "../HomePage/Category/BgBistro";
import Category from "../HomePage/Category/Category";
import ChefRecommends from "../HomePage/ChefRecommends/ChefRecommends";
import Featured from "../HomePage/Featured/Featured";
import MainMenu from "../HomePage/MainMenu/MainMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
                <Category></Category>
                <BgBistro></BgBistro>
                <MainMenu></MainMenu>
                <ChefRecommends></ChefRecommends>
            </div>
            <Featured></Featured>
        </div>
    );
};

export default Home;