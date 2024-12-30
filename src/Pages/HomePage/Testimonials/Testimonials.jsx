import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('./reviews.json')
            .then(res => setReviews(res.data))
    }, [])
    return (
        <div className="py-10">
            <SharedTitle
                subHeading={"What our client say"}
                heading={"TESTIMONIALS"}
            ></SharedTitle>

            <div className="max-w-5xl mx-auto mt-10 mb-20">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="text-center items-center w-5/6 mx-auto">
                                <div className="flex justify-center my-3">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                    />
                                </div>
                                <h2>{review.details}</h2>
                                <p className="pt-3 text-2xl text-orange-400">{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;