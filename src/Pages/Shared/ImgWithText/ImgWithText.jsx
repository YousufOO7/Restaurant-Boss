import { Parallax } from 'react-parallax';
import MenuCard from '../../HomePage/MenuCard/MenuCard';
import { Link } from 'react-router-dom';

const ImgWithText = ({ items, coverImg, title }) => {
    console.log(title)
    return (

        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={coverImg}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="my-10">
                    <div
                        className="hero bg-cover h-[400px]">
                        <div className="hero-content text-center bg-[#15151599] bg-opacity-60 text-white px-5 py-8">
                            <div className="max-w-2xl">
                                <h1 className="mb-5 text-4xl font-semibold uppercase">{title}</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
            </Parallax>
            <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-6xl mx-auto my-10">
                {
                    items?.map(menu => <MenuCard key={menu._id} menu={menu}></MenuCard>)
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

export default ImgWithText;