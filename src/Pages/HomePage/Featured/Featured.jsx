import featuredImg from '../../../assets/home/featured.jpg'
import SharedTitle from '../../Shared/SharedTitle/SharedTitle';

const Featured = () => {
    return (
        <div
            className="hero h-[600px] my-10 bg-fixed"
            style={{
                backgroundImage: `url(${featuredImg})`,
            }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className=" text-neutral-content">
                <div className='max-w-[1000px]'>
                    <div className='mb-10 -mt-10'>
                        <SharedTitle
                            subHeading="Check it out"
                            heading="From Our Menu"
                        ></SharedTitle>
                    </div>

                    <section className='flex gap-5'>
                        <div className='flex-1'>
                            <img src={featuredImg} className='md:h-64 w-full' alt="" />
                        </div>
                        <div className='flex-1'>
                            <h3 className="mb-1 md:text-2xl font-bold">March 20, 2023</h3>
                            <h3 className="mb-1 md:text-2xl font-bold">where i can get some?</h3>
                            <p className="mb-3 text-xs md:text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium odit qui laboriosam illum porro nesciunt aperiam, culpa quos sed quasi repellat ea, amet aut dolore saepe incidunt cum est non itaque alias architecto harum nemo delectus quaerat. Fuga explicabo, similique voluptatem repellendus quasi, culpa iste debitis suscipit deserunt numquam aliquid!
                            </p>
                            <button className=" py-2 px-5 rounded-lg border-0 border-b-2 border-white uppercase">Read more</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Featured;