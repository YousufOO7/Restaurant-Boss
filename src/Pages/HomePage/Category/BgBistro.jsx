import bistroImg from '../../../assets/home/chef-service.jpg'

const BgBistro = () => {
    return (
        <div className="my-10">
            <div
                className="hero bg-cover h-[400px]"
                style={{
                    backgroundImage: `url(${bistroImg})`,
                }}>
                <div className="hero-content text-center bg-white px-5 py-8 text-black">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-4xl font-semibold uppercase">Bistro Boss</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BgBistro;