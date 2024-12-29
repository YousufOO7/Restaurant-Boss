import Banner from "../HomePage/Banner/Banner";
import BgBistro from "../HomePage/Category/BgBistro";
import Category from "../HomePage/Category/Category";
import MainMenu from "../HomePage/MainMenu/MainMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
                <Category></Category>
                <BgBistro></BgBistro>
                <MainMenu></MainMenu>
            </div>
        </div>
    );
};

export default Home;