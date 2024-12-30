import { Parallax } from 'react-parallax';

const ImgWithText = ({ coverImg, title }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={coverImg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="my-10">
                <div
                    className="hero bg-cover h-[400px]">
                    <div className="hero-content text-center bg-slate-100 bg-opacity-85 px-5 py-8 text-black">
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


    );
};

export default ImgWithText;