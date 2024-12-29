import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Aos from 'aos';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    Aos.init({
        duration: 1000,
        once: true,
    });
    return (
        <div>
            <section className="my-10">
                <SharedTitle
                    subHeading={"From 11:00AM to 10:00PM"}
                    heading={"Order online"}
                ></SharedTitle>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper my-5"
                    data-aos="fade-up"
                >
                    <SwiperSlide>
                        <img className="transition-transform duration-700 ease-in-out hover:scale-110" src={slide1} alt="" />
                        <p className="uppercase text-center -mt-16 text-white text-3xl">Salad</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="transition-transform duration-700 ease-in-out hover:scale-110" src={slide2} alt="" />
                        <p className="uppercase text-center -mt-16 text-white text-3xl">Pizza</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="transition-transform duration-700 ease-in-out hover:scale-110" src={slide3} alt="" />
                        <p className="uppercase text-center -mt-16 text-white text-3xl">Soups</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="transition-transform duration-700 ease-in-out hover:scale-110" src={slide4} alt="" />
                        <p className="uppercase text-center -mt-16 text-white text-3xl">Desserts</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="transition-transform duration-700 ease-in-out hover:scale-110" src={slide5} alt="" />
                        <p className="uppercase text-center -mt-16 text-white text-3xl">Salad</p>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;